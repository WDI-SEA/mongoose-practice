// Require Mongoose node module
const mongoose = require('mongoose');

// Create Museum Schema
const museumSchema = new mongoose.Schema({
  // Use schema to create model
  name: String,
  city: String,
  country: String,
  image: String,
});

// Export Museum Model
module.exports = mongoose.model('Museum', museumSchema);
