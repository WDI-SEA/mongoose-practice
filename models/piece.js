// Require Mongoose node module
const mongoose = require('mongoose');

// Define an creator schema. This is an example of an embeded schema
let creatorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  image: String,
  birthYear: Number,
  deathYear: Number
})


// Define Piece schema - note the reference to museum.
let pieceSchema = new mongoose.Schema({
  name: String,
  image: String,
  creator: creatorSchema,
  museum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Museum'
  } 
});

module.exports = mongoose.model('Piece', pieceSchema);

