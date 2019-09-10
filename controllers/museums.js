// Require database
const db = require('../models');
// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(results => {
    res.render('museums/index', {
      museums: results
    })
  })
  .catch(err => {
    console.log(err);
    res.render('404').send({ message: 'GET route to /museumes database error' })
    // res.render('404')
  })
  // res.render('museums/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    image: req.body.image    
  })
  .then(results => {
    res.redirect('museums');
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ message: 'POST route to /museums database error' })
    // res.render('404')
  })
  // res.send('STUB - NEW MUSEUM POST');
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
  .then(result => {
    res.render('museums/show', {
      museum: result
    });
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
  // res.send('museums/show');
});

module.exports = router;
