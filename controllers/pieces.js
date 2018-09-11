// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Get reference to the models
const db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces

  res.render('pieces/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
	db.Piece.create({
		name: req.body.name,
		image: req.body.image,
		museum: req.body.museum,
		country: req.body.country,
		creator : [
			{	firstName: req.body.firstname,
				lastName: req.body.lastname,
				image: req.body.artist_image,
				birdthDate: req.body.birth,
				deathDate: req.body.death
			}
		]
	})
	.then(result => {
		res.send(result)
		// res.render('pieces/index');
	})
	.catch(err => {
		console.log(err);
	})
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
