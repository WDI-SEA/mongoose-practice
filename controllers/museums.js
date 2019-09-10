// Require needed modules
const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(results => {
    res.render('museums/index', {
      museums: results
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({
      message: 'GET /museumes database flub'
    })
  })
});

router.post('/', (req, res) => {
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
    res.status(500).send({
      message: 'POST /museums database flub'
    })
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
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
});

module.exports = router;