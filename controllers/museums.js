// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
let db = require('../models')

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
  	res.render('museums/index', { museums });
  })
  .catch(err => {
  	console.log('Error', err)
  })
  
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  .then(() => {
    res.redirect('museums')
  })
   .catch(err => {
    console.log('Error', err)
  })
  
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {

  // db.Museum.findOne( {_id: req.params.id})
  // .then(museum => {
  //   db.Piece.find({ museum: museum._id})
  //   .then(pieces => {
  //     res.render('museums/show', {museum, pieces})
  //   })
  //   .catch(err => {
  //     console.log('Error finding pieces', err)
  //   })
  // })
  // .catch(err => {
  //   console.log('Error finding musuem', err)
  // })

  db.Piece.find({ museum: req.params.id})
  .populate('museum')
  .then(pieces => {
    res.render('museums/show', { pieces });
  })
   .catch(err => {
    console.log('Error', err)
  })
  
});

module.exports = router;
