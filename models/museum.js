// Require Mongoose node module
const mongoose = require('mongoose');

// Define museum schema
let museumSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  image: String
});

module.exports = mongoose.model('Museum', museumSchema);