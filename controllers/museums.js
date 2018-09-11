// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // Replace stub route with page that renders list of all museums
  db.Museum.find().then( results => {
    res.render('museums/index', { results });
  }).catch(err => {
    console.log(err);
    res.send(err);
  })
  
});

router.post('/', (req, res) => {
  // Replace stub route with page that redirects after adding new museum
  const { name, city, country, image } = req.body;
  db.Museum.create({
    name: name,
    city: city,
    country: country,
    image: image,
  }).then(result => {
    res.redirect('/museums');
  }).catch(err => {
    console.log(err);
    res.send(err);
  })
});

router.get('/new', (req, res) => {
  // Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
