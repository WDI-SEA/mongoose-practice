// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema

let creatorSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    image: String,
    birthyear: Number,
    deathyear: Number
})

let pieceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    originCountry: {
        type: String
    },
    museum: {
        type: String
    },
    creator: [creatorSchema]
})
// TODO: Use Piece schema to create Piece model

// TODO: Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema)