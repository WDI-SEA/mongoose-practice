// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

//GET / to render pieces index page
router.get('/', (req, res) => {
  db.Piece.find()
    .populate('museum')
    .then(pieces => {
      res.render('pieces/index', { pieces });
    })
    .catch(err => {
      res.render('error', err)
    })
});

//POST route to add new pieces
router.post('/', (req, res) => {
  req.body.creator = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    image: req.body.CreatorImage,
    birthyear: req.body.birthyear,
    deathyear: req.body.deathyear
  }
  db.Piece.create(req.body)
    .then(() => {
      res.redirect('/pieces');
    })
    .catch(err => {
      console.log('error', err)
    })
});

//GET /new for form to input new piece information
router.get('/new', (req, res) => {
  db.Museum.find()
    .then(museums => {
      res.render('pieces/new', { museums })
    })
    .catch(err => {
      res.render('error', err)
    })
});

//GET /:id to render an individual piece
router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
    .populate('museum')
    .then(piece => {
      res.render('pieces/show', { piece })
    })
    .catch(err => {
      res.render('error', err)
    })
});

//GET /:id/edit to render form to update piece information
router.get('/:id/edit', (req, res) => {
  db.Piece.findById(req.params.id)
    .then(piece => {
      db.Museum.find()
      .then(museums => {
        res.render('pieces/edit', { piece, museums })
      })
      .catch(err => {
        res.render('error', err)
      })
    })
    .catch(err => {
      res.render('error', err)
    })
})

//PUT route to update piece information
router.put('/:id', (req, res) => {
  req.body.creator = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    image: req.body.CreatorImage,
    birthyear: req.body.birthyear,
    deathyear: req.body.deathyear
  }
  db.Piece.findByIdAndUpdate({_id: req.params.id}, {$set: req.body})
  .then(() => {
    res.redirect('/pieces/' + req.params.id)
  })
  .catch(err => {
    console.log(err)
    res.render('error', err)
  })
})

module.exports = router;
