// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	image: String,
	birthyear: Number,
	deathyear: Number
});

// TODO: Create Piece Schema
const pieceSchema = new mongoose.Schema({
	name: String,
	image: String,
	creator: creatorSchema,
	museum: {type: mongoose.Schema.Types.ObjectId, ref: 'Museum'}
});

// HINT: include a creator field for using the Creator schema

// TODO: Use Piece schema to create Piece model
const pieceModel = mongoose.model('Piece', pieceSchema);

// TODO: Export Piece Model
module.exports = pieceModel;

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
