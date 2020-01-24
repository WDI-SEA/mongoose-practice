// Require needed modules
const express = require('express');
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', {museums});
  })
  
});

router.post('/new', (req, res) => {
  db.Museum.create(req.body)
  .then(newMuseum => {
    res.status(201).redirect('/museums')
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum => {
    res.render('museums/show', {museum});
  })

});

module.exports = router;
