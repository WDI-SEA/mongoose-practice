// Require needed modules
const express = require('express');
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(foundMuseums => {
    res.render('museums/index', {foundMuseums});
    // res.send(foundMuseums);
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    image: req.body.image
  })
  .then(createdMuseum => {
    res.send(createdMuseum);
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.find({
    _id: req.params.id
  })
  .then((foundMuseum) => {
    let museum = foundMuseum[0];
    console.log(museum.name);
    res.render('museums/show', {museum});
  })
});

module.exports = router;
