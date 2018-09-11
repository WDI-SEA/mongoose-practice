// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find().populate('museum')
    .then(pieces => {
      res.render('pieces/index', {pieces: pieces});
    }).catch(error => res.send(error));
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create({
    name:req.body.name,
    image:req.body.image,
    creator:{
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthyear: req.body.birthyear,
      deathyear: req.body.deathyear,
      image: req.body.creatorimage
    },
    museum: req.body.museum
  }).then(piece => {
    res.redirect('/pieces');
  }).catch(error => res.send(error));
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
    .then(museums => {
      res.render('pieces/new', {museums: museums});
    }).catch(error => res.send(error));
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findById(req.params.id).populate('museum')
    .then(piece => {
      res.render('pieces/show', {piece: piece});
    }).catch(error => res.send(error));
});

module.exports = router;
