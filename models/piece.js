// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	image: String,
	birdthDate: Number,
	deathDate: Number
})

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieaceSchema = new mongoose.Schema({
	name: String,
	image: String,
	museum: {type: mongoose.Schema.Types.ObjectId, ref:'Museum'},
	creator : creatorSchema
});

// TODO: Use Piece schema to create Piece model
const piece = mongoose.model('Piece', pieaceSchema)

// TODO: Export Piece Model
module.exports = piece;


// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
