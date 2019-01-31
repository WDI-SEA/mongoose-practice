// Require Mongoose node module
const mongoose = require('mongoose');


const museumSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	image: {
		type: String,
		default: 'http://placekitten.com/200/300'
	}
})


module.exports = mongoose.model('Museum', museumSchema)