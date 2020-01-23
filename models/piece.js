// Each piece has one creator, creator is a subdocument of piece

// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new Schema({
    firstName: String,
    lastName: String,
    imageUrl: String,
    birthYear: Number,
    deathYear: Number,
    }, {
        timestamps:true
    }
);

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new Schema({

});

// TODO: Use Piece schema to create Piece model

// TODO: Export Piece Model


// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
