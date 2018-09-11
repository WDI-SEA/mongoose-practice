// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

//declare refrence to models
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(result => {
  	res.render('pieces/index', {pieces: pieces});
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
  		firstName: req.body.firstName,
  		lastName: req.body.lastName,
  		birthYear: req.body.birthYear,
  		deathYear: req.body.deathYear,
  		creatorImage: req.body.creatorImage
  	}
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums => {
  	res.render('pieces/new', {museums: museums});
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
