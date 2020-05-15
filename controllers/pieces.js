// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .then(pieces => {
    res.render('pieces/index', {pieces})
  })
  .catch(err => {
    console.log('proble', err)
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  req.body.creator = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    image: req.body.image,
    birthyear: req.body.birthyear,
    deathyear: req.body.deathyear
  }
  db.Piece.create(
    req.body
  )
  .then(() => {
    res.redirect('/pieces')
  })
  .catch(err => {
    console.log("problem", err)
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museum => {
    res.render('pieces/new', {museum})
  })
  .catch(err => {
    console.log('problem',err)
  })
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findOne({_id: req.params.id})
  .then(pieces => {
    db.Museum.findOne({_id: pieces.museum})
    .then(museum => {
      res.render('pieces/show', {pieces, museum})
    })
    .catch(err => {
      console.log('problem', err)
    })
  })
  .catch(err => {
    console.log('problem', err)

  })
});

module.exports = router;
