// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .then(pieces => {
    res.render('pieces/index', {pieces});
  }) 
  .catch(err => {
    console.log(err)
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create(
    req.body
  )
  .then(pieceData => {
    res.send(pieceData)
  })
  .catch(err => {
    console.log("piece creation error", err)
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museumData => {
    res.render('pieces/new', {museumData})
  })
  .catch(err => {
    console.log(err)
  })
});

router.get('/:id', (req, res) => {
  db.Piece.findOne({_id: req.params.id})
  .then(pieces => {
    db.Museum.findOne({_id: pieces.museum})
    .then(museumData => {
      res.render('pieces/show', {pieces, museumData})
    })
  })
});

module.exports = router;
