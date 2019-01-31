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
    res.render('pieces/index', { pieces: pieces });
  })
  .catch(err=>{
    console.log(`Error in get pieces route ${err}`);
    res.render('error');
  })
});

router.post('/', (req, res) => {
  // Page that renders form for adding new piece
  db.Piece.create({
    name: req.body.name,
    originCountry: req.body.originCountry,
    image: req.body.image,
    museum: req.body.Museum,
    creator: {
      firstName: req.body.creatorFirstName,
      lastName: req.body.creatorLastName,
      image: req.body.creatorImage,
      birthYear: req.body.birthYear,
      deathYear: req.body.deathYear,
    }
  })
  .then(createdPiece=>{
    console.log("hell yea!", createdPiece);
    res.redirect('/pieces');
  })
  .catch(err=>{
    console.log(`Error in get pieces route ${err}`);
    res.render('error');
  })
});

router.get('/new', (req, res) => {
  // Page that renders form for adding new piece
  db.Museum.find()
  .then(museums=> {
    res.render('pieces/new', { museums: museums });
  })
  .catch(err=>{
    console.log(`Error in adding a piece ${err}`);
    res.render('error');
  })
});

router.get('/:id', (req, res) => {
  // Page that renders piece details and all the info about it's creator and the museum it's located in
  db.Piece.findOne({ _id: req.params.id })
  .populate('museum')
  .then(piece=>{
    res.render('pieces/show', { piece: piece });
  })
  .catch(err=>{
    console.log(`Error in get one piece route ${err}`);
    res.render('error');
  })
});

module.exports = router;
