// Require Mongoose node module
const mongoose = require('mongoose')

// TODO: Create Museum Schema

// TODO: Use schema to create model

// TODO: Export Museum Model


	//create schema
	var museumSchema = new mongoose.Schema({
		name: String,
		city: String,
		country: String,
		imageUrl: String
	  })

	//create model
	var Museum = mongoose.model('Museum', museumSchema)

	//create museum documents
	var sam = new Museum({ 
		name: 'SAM', 
		city: Seattle, 
		country: USA, 
		imageUrl: http://www.seattleartmuseum.org/Assets%20Visit/seattle-art-museum/seattle-art-museum-header-780px.jpg
		})

	//save documents to db
	sam.save(function (err, sam) {
		if (err) return console.error(err)
		console.log('Museum Saved')
	  })


	//display all documents
	Museum.find(function (err, museums) {
		if (err) return console.error(err)
		console.log(museums)
	  })

})

module.exports = museum