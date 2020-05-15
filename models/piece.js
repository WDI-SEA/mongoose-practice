// Require Mongoose node module
let mongoose = require('mongoose');

// TODO: Create Creator Schema
let createrSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	image: String,
	birthyear: Number,
	deathyear: Number
})


// TODO: Create Piece Schema

let pieceSchema = new mongoose.Schema({
	name: String,
	image: String,
	creator: createrSchema,
	museum: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Museum'
	}
})

module.exports = mongoose.model('Piece', pieceSchema)

// HINT: include a creator field for using the Creator schema

// TODO: Use Piece schema to create Piece model

// TODO: Export Piece Model


// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
