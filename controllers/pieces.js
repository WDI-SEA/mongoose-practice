// Require needed modules
const express = require('express');
let db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // Renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces=>{
    res.render('pieces/index',{pieces});
  })
  .catch(err=>{
    console.log('Error finding pieces', err)
    res.render('error')
  })
});

router.post('/', (req, res) => {
  // Renders form for adding new piece
  console.log(req.body)
  req.body.creator = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    image: req.body.creatorPic,
    birthyear: req.body.birthyear,
    deathyear: req.body.deathyear
  }
  db.Piece.create(req.body)
  .then(newPiece=>{
      res.redirect('/pieces')
  })
  .catch(err=>{
      console.log('Error creating a new piece', err)
      res.render('error')
  })
});

router.get('/new', (req, res) => {
  // Renders form for adding new piece for a museum
  db.Museum.find()
  .then(museums=>{
    res.render('pieces/new',{museums});
  })
  .catch(err=>{
    console.log('Error getting new piece form', err)
    res.render('error')
  })
});

router.get('/:id', (req, res) => {
  // Renders piece details and all the info about it's creator and the museum it's located in
  db.Piece.findById(req.params.id)
  .populate('museum')
  .then(piece=>{
    res.render('pieces/show',{piece});
  })
  .catch(err=>{
    console.log('Error getting piece', err)
    res.render('error')
  })
});

module.exports = router;
