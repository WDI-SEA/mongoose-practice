// Require needed modules
const express = require('express');
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then( museums => {
    res.render('museums/index', { museums });
  })
  .catch(err => {
    res.send('There was an error in GET /museums')
  })
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  .then( museum => {
    res.redirect('/museums');
  })
  .catch(err => {
    res.send('There was an error in POST /museums');
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  let id = req.params.id
  db.Museum.findById(req.params.id).populate('pieces')
  .then(museum => {
    console.log(museum)
    res.render('museums/show', { museum });
  })
  .catch(err => {
    res.send('There was an error in GET /museums/:id');
  })
});

module.exports = router;
