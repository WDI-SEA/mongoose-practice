// Require needed modules
const express = require('express');
const mongoose = require('mongoose');

// Declare router and models reference
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  //res.render('pieces/index');
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
	res.render('pieces/index', { pieces: pieces });
	//res.send()
  })
  .catch(err => {
  	console.log('error in GET /pieces route', err);
  	res.send('todo: create error.ejs to render purty error page');
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  //res.send('STUB - NEW PIECES POST');
  // TODO: Fix this code, which likely won't work
  const newCreator = Creator({
    firstName: req.body.creator.firstName,
    lastName: req.body.creator.lastName,
    imageUrl: req.body.creator.imageUrl,
    birthYear: req.body.creator.birthYear,
    deathYear: req.body.creator.deathYear,
    museumRef: req.body.creator.museum
  })
  const newPiece = Piece({
    name: req.body.piece.name,
    imageUrl: req.body.piece.imageUrl,
    originCountry: req.body.pice.originCountry,
    creator: newCreator
  })
  Piece.create({
    piece: newPiece,
    creator: newCreator
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
 //  db.Museum.findById(req.params.id)
 //  .then(museum => {
 //  	if(museum){ 
 //  	//we found a museum! yay! do a query to get the pieces by id
	//   	db.Piece({ museum: museum.id })
	//   	.then(pieces => {
	//   		museum.pieces = pieces || [];
	//   		res.render('museums/show', { museum: museum });
	//   	})
	//   	.catch(err => {
	//   		console.log('error fetching pieces in GET /museum/:id route:', err);
	//   		res.send('no, really, you need an error page')
	//   });

 //  	} 
 //  	else {
 //  		res.send('to do: decide what to show user if no museum with that id was found');
 //  	}
 //  })
	// .catch(err => {
	//   	console.log('error fetching museums in GET /museums/:id route:', err);
	//   	res.send('need to make a museum-quality error page.');
	//   });
});

module.exports = router;

