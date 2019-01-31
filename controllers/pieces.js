// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

// TODO: Replace stub route with page that renders list of all pieces
router.get('/', (req, res) => {
  db.Piece.find()
  // Similar to include for sequelize, the field in the piece schema
  .populate('museum')
  .then(pieces => {
  	res.render('pieces/index', { pieces: pieces })
  })
  .catch(err => {
  	console.log('Error in GET/pieces route: ', err);
  	res.send('TODO: Create error.ejs to render nice error page!');
  });
});


// TODO: Replace stub route with page that renders form for adding new piece
router.post('/', (req, res) => {
	db.Piece.create({
		name: req.body.name,
		originCountry: req.body.originCountry,
		image: req.body.image,
		museum: req.body.museum.ObjectId,
		creator: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			creatorImage: req.body.creatorImage,
			birthYear: req.body.birthYear,
			deathYear: req.body.deathYear
		}
	})
	.then(function(){
		res.redirect('/pieces');
	})
	.catch(function(err){
		console.log(err);
		res.status(500).send({ message: 'Server Error'	});
	})
});


router.get('/new', (req, res) => {
  res.render('pieces/new');
});

// TODO: Replace stub route with page that renders piece details
//  and all the info about it's creator and the museum it's located in
router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .then(piece => {
  	res.render('pieces/show', { piece: piece });
	})
  .catch(err => {
  	console.log('Error in GET /museums/:id route:', err);
  	res.status(500).send({ message: 'Server Error'	});
  });
});

module.exports = router;
