// Require needed modules
const express = require('express');
const db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  .then(pieces => {
    db.Museum.find()
    .then(museums => {
      res.render('pieces/index', {pieces, museums});
    })
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.send('STUB - NEW PIECES POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .then(piece => {
    db.Museum.findById({
      _id : piece.museum
    }).then(museum => {
      res.render('pieces/show', {piece, museum})
    })
  })
});

module.exports = router;
