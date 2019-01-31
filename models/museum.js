// Require Mongoose node module
const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100
	},
	city: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 50
	},
	country: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 50
	},
	imageUrl: {
		type: String,
		minlength: 2,
		maxlength: 100
	}
});

// Create and export model
module.exports = mongoose.model('Museum', museumSchema);