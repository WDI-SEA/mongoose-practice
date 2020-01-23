// Require needed modules
const express = require('express');
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find({}, (err, museums) => {
    if (err) return res.send(err);
    res.render('museums/index', { museums });
  })
});

router.post('/', (req, res) => {
  db.Museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    imageUrl: req.body.imageUrl
  })
  .then( museum => {
    res.redirect('/museums');
  })
  .catch(err => {
    res.send('There was an error in POST /museums');
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
