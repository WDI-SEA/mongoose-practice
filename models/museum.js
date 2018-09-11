// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
const museumSchema = new mongoose.Schema ({
	name: String,
	year: Number,
	location: String
})
// TODO: Use schema to create model

// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema);

