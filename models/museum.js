// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
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
// TODO: Use schema to create model
// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema);