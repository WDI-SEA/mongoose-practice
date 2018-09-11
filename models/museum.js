// Require Mongoose node module
const mongoose = require('mongoose');

// Create Museum Schema
const museumSchema = new mongoose.Schema({
	name: String,
	city: String,
	country: String,
	image: String
});

// Use schema to create model and export Museum Model
module.exports = mongoose.model('Museum', museumSchema);