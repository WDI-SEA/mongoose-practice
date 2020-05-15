// Require needed modules
const express = require('express');
let db = require('../models')
// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
    console.log(pieces)
    res.render('pieces/index', {pieces})
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
 db.Piece.create({
   name: req.body.name,
   image: req.body.image,
   museum: req.body.museum,
   creator: [{
     firstname: req.body.firstname,
     lastname: req.body.lastname,
     image: req.body.creatorimage,
     birthyear: req.body.birthyear,
     deathyear: req.body.deathyear
   }]
 })
 .then(piece => {
   res.redirect('/pieces')
 })
 .catch(err => {
   console.log(err)
   res.send('Err')
 })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
