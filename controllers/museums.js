// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', {museums});
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })
});

router.post('/', (req, res) => {
  db.Museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    image: req.body.image
  })
  .then(newMuseum => {
    console.log(newMuseum)
    res.redirect('/museums')
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findOne({_id: req.params.id})
  .then(museumData => {
    db.Piece.find({museum: req.params.id})
    .then(pieces => {
      res.render('museums/show', {museum: museumData, pieces})
    })
    .catch(err => {
      console.log(err)
      res.send('Error')
    })
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })

});

module.exports = router;
