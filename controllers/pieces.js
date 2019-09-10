// Require needed modules
const express = require('express');
const db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .then(pieces => {
    res.render('pieces/index', {
      pieces
    })
  })
  .catch( err => {
    console.log('err', err)
    res.send('Error in GET /pieces')
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    museum: req.body.museum,
    creator: {
      firsname: req.body.firstname,
      lastname: req.body.lastname,
      birthyear: req.body.birthyear,
      deathyear: req.body.deathyear,
      image: req.body.image
    }
  })
  .then(result => {
    res.redirect('/pieces/' + result.id)
  })
  .catch( err => {
    console.log('err', err)
    res.send('Error in POST /pieces')
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .select({ name: 1 })
  .exec()
  .then(museums => {
    res.render('pieces/new' { museums })
  })
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findbyId(req.params.id)
  .populate('Museum')
  .then(foundPiece => {
    res.render('/piece/show', {
      foundPiece
    })
  })
  res.send('pieces/show');
});

module.exports = router;
