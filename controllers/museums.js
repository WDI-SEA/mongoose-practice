// Require needed modules
const express = require('express');


// Declare router
const router = express.Router();

//import models
const db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', {museums});
  })
  .catch(err => {
    console.log(err)
    res.send('Whoops')
  })
  
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  .then(result => {
    res.redirect('/museums')
  })
  .catch(err => {
    console.log(err)
    res.send('sucks')
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(foundmuseum => {
    db.Piece.find({museum: foundmuseum._id})
    .then(pieces => {
      res.render('museums/show', {
        foundmuseum, pieces
      })
    })
  })
  .catch()
  // res.send('museums/show');
});

module.exports = router;
