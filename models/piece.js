// Require Mongoose node module
const mongoose = require('mongoose');

// Create Creator Schema
const creatorSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: String,
  Image: String,
  birthYear: Number,
  deathYear: Number
})

// Create Piece Schema
const pieceSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Untitled'
  },
  originCountry: String,
  image: String,
  museum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Museum'
  },
  creator: creatorSchema
})

// Use Piece schema to create Piece model and Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema);
