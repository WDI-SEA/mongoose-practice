// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare a reference to the models
const db = require('../models');

// Declare routes
router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
  	 res.render('pieces/index', { pieces: pieces });
  })
 .catch(err => {
 	console.log(err);
 	res.render('error');
 })
});

router.post('/', (req, res) => {
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    originCountry: req.body.originCountry,
    museum: req.body.museum,
    creator: {
      firstname: req.body.creator_firstname,
      lastname: req.body.creator_lastname,
      image: req.body.creator_image,
      birthyear: req.body.creator_birthyear,
      deathyear: req.body.creator_deathyear
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
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museum => {
     res.render('pieces/new', { museums: museums });
  })
  .catch(err => {
    console.log(err);
    res.render('error');
  });
});

router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .populate('museums')
  .then(piece => {
    res.render('pieces/show', { piece: piece });
  })
  .catch(err => {
    console.log(err);
    res.render('error');
  });
});

module.exports = router;
