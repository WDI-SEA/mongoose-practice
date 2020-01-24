// Require needed modules
const express = require('express');
const db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', {museums: museums });
  })
  .catch(err => {
    res.send('error', err)
  })


});

router.post('/', (req, res) => {
  console.log(req.body)
  db.Museum.create(req.body)
  .then(newMuseum => {
    console.log(newMuseum)
    res.redirect(`museums/${newMuseum.id}`)
  })
  .catch(err => {
    console.log(err)
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
