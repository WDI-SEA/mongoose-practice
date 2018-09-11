// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare reference to the models
const db = require('../models');

// Declare Routes
router.get('/', (req, res) => {
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
	res.render('pieces/index', { pieces: pieces });
  })
  .catch(err => {
  	console.log(err);
  	res.render('error');
  });
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
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
