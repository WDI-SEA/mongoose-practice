// Require Mongoose node module
const mongoose = require('mongoose');

// Note: birth/death year defined as strings to allow for B.C. and circa dates
const creatorSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 50
	},
	lastName: {
		type: String,
		minlength: 2,
		maxlength: 50
	},
	imageUrl: {
		type: String,
		minlength: 2,
		maxlength: 100
	},
	birthYear: {
		type: String
	},
	deathYear: {
		type: String
	}	
});

const pieceSchema = new mongoose.Schema({
	name: {
		type: String,
		default: "Untitled",
		required: true,
		minlength: 2,
		maxlength: 100
	},
	originCountry: String,
	imageUrl: String,
	museum: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Museum'
	},
	creator: creatorSchema
});

// Create and export model
module.exports = mongoose.model('Piece', pieceSchema);
