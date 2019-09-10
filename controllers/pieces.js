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
  .catch(err => {
    console.log(err);
  })
  
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.create(req.body)
  .then(() => {
    res.redirect('/pieces');
    }
  )
  .catch(err => {
    console.log(err)
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.find(req.params.id)
  .then(result => {
    res.render('pieces/show')
  })
});

module.exports = router;
