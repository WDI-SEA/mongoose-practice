// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare reference to the models
const db = require('../models');

// Declare Routes
router.get('/', (req, res) => {
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
	res.render('pieces/index', { pieces: pieces });
  })
  .catch(err => {
  	console.log(err);
  	res.render('error');
  });
});

router.post('/', (req, res) => {
	db.Piece.create({
		name: req.body.name,
		image: req.body.image,
		originCountry: req.body.originCountry,
		museum: req.body.museum,
		creator: {
			firstName: req.body.creator_firstName,
			lastName: req.body.creator_lastName,
			image: req.body.creator_image,
			birthYear: req.body.creator_birthYear,
			deathYear: req.body.creator_deathYear
		}
	})
	.then(result => {
		res.redirect(`/pieces/${result.id}`);
	})
	.catch(err => {
		console.log(err);
		res.render('error');
	});
});

router.get('/new', (req, res) => {
  db.Museum.find()
  .then(museums => {
	res.render('pieces/new', {museums: museums });
  })
  .catch(err => {
  	console.log(err);
  	res.render('error');
  });
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
