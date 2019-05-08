// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	image: String,
	birthyear: Number,
	deathyear: Number
})
// TODO: Create Piece Schema

//name, an image, an embedded schema for Creator, and a reference to the Museum it is currently in

// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
	name: String,
	image: String,
	museum: {
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Museum'
	},
	creator: creatorSchema
})
// TODO: Use Piece schema to create Piece model
let User = mongoose.model('Piece',PieceSchema)


// TODO: Export Piece Model
module.exports = Piece

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
