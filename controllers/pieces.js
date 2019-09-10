// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
    res.render('pieces/index', {pieces});
  })
  .catch(err => {
    console.log(err)
    res.send('Whoops')
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create(req.body)
  .then(result => {
    res.redirect('/pieces')
  })
  .catch(err => {
    res.send('Something bad happened');
  })
  
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', {museums});
  })
  .catch(err => {
    console.log(err)
    res.send('whoops')
  })
  
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
