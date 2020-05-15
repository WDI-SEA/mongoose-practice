// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

let db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .then(pieces => {
  	res.render('pieces/index', {pieces})
  })
  .catch(err => {
  	console.log(err)
  })
});

router.post('/', (req, res) => {
  db.Piece.create({
    name: req.body.name,
    image:req.body.image,
    originCountry: req.body.country,
    museum: req.body.museum,
    creator: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.creatorImage,
      birthyear: req.body.birthyear,
      deathyear: req.body.deathyear
    }
  })
  .then(museum => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', {museums});
  })
});

router.get('/:id', (req,res) => {
  db.Piece.findById(req.params.id)
  .then(piece => {
    res.render('pieces/show', {piece})
  })
  .catch(err => {
    console.lod('error', err)
    res.status(501).send({ message: 'Oops' })
  })
})

router.delete('/', (req,res) => {
	db.Piece.remove({})
	.then(pieces => {
		res.send('deleted')
	})
	.catch(err => {
		console.lod('error', err)
		res.status(501).send({ message: 'Oops' })
	})
})

module.exports = router;
