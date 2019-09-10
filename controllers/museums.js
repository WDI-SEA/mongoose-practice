// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
    db.Museum.find()
    .then(museums => {
        res.render('museums/index', { museums });
    })
    .catch(err => {
        console.log(err)
        res.send('Error in GET /museums')
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
      console.log('New Museum Added: ', createdMuseum)
      res.redirect('/museums')
  })
  .catch(err => {
      console.log(err)
      res.send('Error in creating new Museum')
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(foundMuseum => {
      db.Piece.find({museum: foundMuseum._id})
      res.render('museums/show', { foundMuseum })
  })
  .catch(err => {
      console.log(err)
      res.send('Error in GET /musems/show route')
  })
});

module.exports = router;
