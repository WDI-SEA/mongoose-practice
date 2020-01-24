// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  .then( pieces => {
    res.render('pieces/index', { pieces });
  })
  .catch(err => {
    res.send('There was an error in GET /pieces');
  })
});

router.post('/', (req, res) => {
  db.Piece.create({
    name: req.body.name,
    image: req.body.pieceImage,
    originCountry: req.body.originCountry,
    museum: req.body.museum,
    creator: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.creatorImage,
      birthyear: req.body.birthyear,
      deathyear: req.body.deathyear
    }
  })
  .then( piece => {
    res.redirect('/pieces')
  })
  .catch(err => {
    res.send('There was an error in POST /pieces');
  })
});

router.get('/new', (req, res) => {
  db.Museum.find()
  .then( museums => {
    res.render('pieces/new', { museums });
  })
  .catch(err => {
    res.send('There was an error in GET /pieces/new');
  })
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
