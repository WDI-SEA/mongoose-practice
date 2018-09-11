// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	image: String,
	birthyear: Number,
	deathyear: Number
});

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
	name: String,
	image: String,
	creators: [creatorSchema],
	museum: { type: mongoose.Schema.Types.ObjectId, ref: 'Museum'}

});
// TODO: Use Piece schema to create Piece model
// TODO: Export Piece Model
module.exports = mongoose.model('Piece', bookSchema);

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!