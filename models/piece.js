// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
let creatorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    image: String,
    birthyear: Number,
    deathyear: Number
})

// TODO: Use Piece schema to create Piece model
let pieceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    originCountry: String,
    museum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Museum'
    },
    creator: creatorSchema
})
// TODO: Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema)

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!

