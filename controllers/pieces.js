// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

//Require models
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  	.populate('museum')
  	.then( pieces => {
  		console.log('The pieces are: ', pieces);
  		res.render('pieces/index', { pieces: pieces });
  	}).catch( err => {
  		console.log(err);
  		res.send(err);
  	})
});

router.post('/', (req, res) => {
  db.Piece.create({
  	name: req.body.name,
  	image: req.body.image,
  	museum: req.body.museum,
  	creator: {
  		firstename: req.body.firstname,
  		lastname: req.body.lastname,
  		image: req.body.creator_image,
  		birthyear: req.body.birthyear,
  		deathyear: req.body.deathyear
  	}
  }).then( piece => {
  		console.log('NEW PIECE!');
  		res.redirect(`/pieces/${piece.id}`);
  	}).catch( err => {
  		console.log(err);
  		res.send(err);
  	})
  res.send('STUB - NEW PIECES POST');
});

router.get('/new', (req, res) => {
  db.Museum.find()
  	.then(museums => {
  		console.log('Found Museums: ', museums)
  		res.render('pieces/new', { buildings: museums })
  	}).catch(err => {
  		console.log(err);
  		res.send(err);
  	})
});

router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .populate('museum')
  	.then(result => {
  		res.render('pieces/show', { piece: result })
  	}).catch(err => {
  		console.log(err);
  		res.send(err);
  	})
});

module.exports = router;
