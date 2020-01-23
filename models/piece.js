// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema

// TODO: Use Piece schema to create Piece model

// TODO: Export Piece Model


// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!

	//create schemas
	var creatorSchema = new mongoose.Schema({
		firstName: String,
		lastName: String,
		imageUrl: String,
		birthYear: String,
		deathYear: String
	  })


	var pieceSchema = new mongoose.Schema({
		name: String,
		imageUrl: String,
		creator: creatorSchema
	  })

	//create model
	var Piece = mongoose.model('Piece', pieceSchema)

	//create documents
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
	Museum.find(function (err, kittens) {
		if (err) return console.error(err);
		console.log(kittens);
	  })

})

module.exports = router;
