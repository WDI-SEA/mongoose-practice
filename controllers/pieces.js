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

router.get('/new', (req, res) => {
  db.Museum.find()
    .then(museums => {
      res.render('pieces/new', { museums });
    })
    .catch(err => {
      res.render('error', err)
    })
});

//GET /:id to render an individual 
router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
    .populate('museum')
    .then(piece => {
      res.render('pieces/show', { piece });
    })
    .catch(err => {
      res.render('error', err)
    })
});

module.exports = router;
