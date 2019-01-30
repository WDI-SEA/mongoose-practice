// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
  	//res.send(pieces)
  	res.render('pieces/index', { pieces: pieces });
  })
  .catch(err => {
  	console.log('Error in GET pieces route:', err);
  	res.send('TODO: Create an error.ejs to render')
  })
  //res.render('pieces/index');
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
  res.send('pieces/show');
});

module.exports = router;
