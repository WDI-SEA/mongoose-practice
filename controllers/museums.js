// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

//declare refrence to models
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
  res.render('museums/index', {museums: museums});
})
  .catch(err => {
  	console.log(err);
  	res.render('error');
  });
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.send('STUB - NEW MUSEUM POST');
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
