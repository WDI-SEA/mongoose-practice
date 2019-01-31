// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    cimage: String,
    birthyear: Number,
    deathyear: Number
    });
// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
	name:{
		type:String,
		default: 'Untitled'
	},
	originCountry: String,
	image: String,
	museum: {
		// one to many relationship
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Museum'
	},
	//to avoid the duplicate
	creator: creatorSchema
})

// Use Piece schema to create Piece model then export Piece Model
// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
module.exports = mongoose.model('Piece', pieceSchema);