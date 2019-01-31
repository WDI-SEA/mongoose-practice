// Require Mongoose node module
const mongoose = require('mongoose');

// Create Museum Schema
const museumSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true,
		minLength: 2,
		maxLength: 100
	}, 
	city:{
		type:String,
		required:true
	},
	country:{
		type:String,
		required:true
	},
	image:{
		type:String,
		default: 'http://placekitten.com/200/300'
	}
})
// Use schema to create model then export Museum Model
module.exports = mongoose.model('Museum', museumSchema);