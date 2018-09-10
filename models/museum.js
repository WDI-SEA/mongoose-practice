// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
const museumSchema = new mongoose.Schema({
	name: String,
	city: String,
	country: String,
	image: String
})

// TODO: Use schema to create model
const museumModel = mongoose.model('Museum', museumSchema);

// TODO: Export Museum Model
module.exports = museumModel;
