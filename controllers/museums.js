// Require needed modules
const express = require('express');
const db = require('../models');
// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then( museums => {
    res.render('museums/index', {
      museums
    })
  })
  .catch(err => {
    console.log(err)
    res.render('Error')
  })
  ;
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  .then(() => {
    res.redirect('/museums');
    }
  )
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
