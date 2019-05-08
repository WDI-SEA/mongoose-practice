// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
let MuseumSchema = new mongoose.Schema({
	//name, a city, a country, and an image.
	name:{
		type: String,
		required:true
	},
	city: String,
	country: String,
	image: String
})

// TODO: Use schema to create model


// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)

module.exports = Museum