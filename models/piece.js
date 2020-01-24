// Each piece has one creator, creator is a subdocument of piece, each piece is in a museum

// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
    firstname: String,
    lastname: String, 
    image: String,
    birthYear: Number,
    deathYear: Number,
    });

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
    name: String,
    image: String,
    originCountry: String,
    creator: [creatorSchema]
});

// TODO: Use Piece schema to create Piece model
const Piece = mongoose.model('Piece', pieceSchema);

// TODO: Export Piece Model
module.exports = Piece;

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
