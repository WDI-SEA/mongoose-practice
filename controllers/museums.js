// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare a reference to the models
const db = require('../models');

router.get('/', (req, res) => {
  // Replace stub route with page that renders list of all museums
  db.Museums.find()
  .then(museums => {
    res.render('museums/index', { museums: museums});
  })
  .catch(err => {
    consoler.log('Error Message', err);
  	res.render('error');
  });
});

router.post('/', (req, res) => {
  // Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  .then(result => {
    res.redirect(`/museums/${result.id}`);
  })
  .catch(err => {
    consoler.log('Error Message', err);
    res.render('error');
  });
});

router.get('/new', (req, res) => {
  // Replace stub route with page that renders form for adding new museum
  db.Museum.findById(req.params.id)
  .then(museum => {
    res.render('museums/show', { museum: museum });
  })
  .catch(err => {
    consoler.log('Error Message', err);
    res.render('error');
  });
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
