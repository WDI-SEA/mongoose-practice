// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: String,
	image: String,
	birthYear: Number,
	deathYear: Number
})

const pieceSchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'Untitled'
	},
	image: String,
	originCountry: String,
	museum: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Museum'
	},
	creator: creatorSchema
})



// TODO: Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema)


