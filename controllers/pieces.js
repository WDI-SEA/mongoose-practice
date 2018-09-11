// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  res.render('pieces/index');
});

router.post('/', (req, res) => {
  // Replace stub route with page that renders form for adding new piece
  const { name, image, museum, firstName, lastName, creatorImage, birthYear, deathYear } = req.body;
  db.Piece.create({
    name: name,
    image: image,
    museum: museum,
    image: image,
    creator: {
      firstName: firstName,
      lastName: lastName,
      image: creatorImage,
      birthYear: birthYear,
      deathYear: deathYear,
    }
  }).then(result => {
    res.redirect('/pieces');
  }).catch(err => {
    console.log(err);
    res.send(err);
  })
});

router.get('/new', (req, res) => {
  // Replace stub route with page that renders form for adding new piece
  db.Museum.find()
    .then(museums => res.render('pieces/new', { museums }))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
