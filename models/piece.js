const mongoose = require('mongoose');

// Create Creator Schema
const creatorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  image: String,
  birthYear: Number,
  deathYear: Number,
});

// Create Piece Schema
const pieceSchema = new mongoose.Schema({
  name: String,
  image: String,
  museum: { type: mongoose.Schema.Types.ObjectId, ref: 'Museum'},
  // HINT: include a creator field for using the Creator schema
  // Use Piece schema to create Piece model
  creator: creatorSchema,
});

// Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema);// Require Mongoose node module






// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! 🎉 Yay for embedded schemas! 🎉 
