// Require needed modules
const express = require('express');
const db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', {
      museums
    });
  })
  .catch(err => {
    console.log(err, 'error in museum /GET')
    res.render('error', {
      message: 'Error in GET /museums'
    })
  })
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  .then(result => {
    res.redirect('/museums')
  })
  .catch(err => {
    console.log(err, 'error in museum /POST')
    res.render('error', {
      message: 'Error in POST /museums'
    })
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(foundMuseum => {
    db.Piece.find({
      museum: foundMuseum._id
      .then(pieces => {
        res.render('museums/show', {
          foundMuseum,
          pieces
        })
      })
    })
  })
  res.send('museums/show');
});

module.exports = router;
