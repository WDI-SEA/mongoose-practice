// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

//GET/ route with page that renders list of all museums
router.get('/', (req, res) => {
  db.Museum.find()
    .then(museums => {
      res.render('museums/index', { museums });
    })
    .catch(err => {
      res.render('error', err)
    })
});
//POST route to add new museums
router.post('/', (req, res) => {
  db.Museum.create(req.body)
    .then(() => {
      res.redirect('/museums');
    })
    .catch(err => {
      console.log('error', err)
    })
});

//GET /new route with page that renders form for adding new museum
router.get('/new', (req, res) => {
  res.render('museums/new');
});

//GET/:id for route that renders museum details
//  and a list of pieces that musuem contains
router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
    .then(museum => {
      db.Piece.find({ museum: req.params.id })
        .then(pieces => {
          res.render('museums/show', { museum, pieces });
        })
        .catch(err => {
          res.render('error', err)
        })
    })
    .catch(err => {
      res.render('error', err)
    })
});

module.exports = router;
