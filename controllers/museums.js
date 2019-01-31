// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // Page that renders list of all museums
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', { museums: museums });
  })
  .catch(err=>{
    console.log(`There's been an error in search for all the museums ${err}`)
      res.render('error');
  })
});

router.post('/', (req, res) => {
  console.log(req.body);
  db.Museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    image: req.body.image
  })
  .then(newMuseum=>{
    res.redirect('/museums');
  })
  .catch(err=>{
    console.log(`There's been an error creating a museum ${err}`)
    res.render('error');
  })
});

router.get('/new', (req, res) => {
  // Page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // Page that renders museum details and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(museum => {
    db.Piece.find({ museum: museum.id })
    .then(pieces=>{
      museum.pieces = pieces || [];
      res.render('museums/show', {museum: museum});
    })
    .catch(err=>{
      console.log(`There's been an error in search for pieces in ${museum.name} ${err}`)
      res.render('error');
    })
  })
  .catch(err=>{
    console.log(`There's been an error in the hunt for museums ${err}`)
    res.render('error');
  })
});

module.exports = router;
