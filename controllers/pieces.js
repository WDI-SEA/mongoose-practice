// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  try {
    const pieces = await db.Piece.find().populate('museum');
    res.render('pieces/index', { pieces: pieces });
  } catch (err) {
    console.log(err);
  }
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
