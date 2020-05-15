// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
let db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
  	res.render('pieces/index', { pieces });
  })
   .catch(err => {
  	console.log('Error', err)
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
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findOne({ _id: req.params.id })
  .populate('museum')
  .then(piece => {
  	console.log(piece)
  	res.render('pieces/show', { piece })
  })
   .catch(err => {
  	console.log('Error', err)
  })
  
});

module.exports = router;
