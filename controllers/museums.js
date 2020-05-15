// Require needed modules
const express = require('express');
let db = require('../models');


// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // Renders list of all museums
  db.Museum.find()
  .then(museums=>{
    res.render('museums/index',{museums});
  })
  .catch(err=>{
    console.log('Error finding museums', err)
    res.render('error')
  })
});

router.post('/', (req, res) => {
  // Renders form for adding new museum
  db.Museum.create(req.body)
  .then(newMuseum=>{
      res.redirect('/museums')
  })
  .catch(err=>{
      console.log('Error posting new museum!', err)
      res.render('error')
  })
});

router.get('/new', (req, res) => {
  // Renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // Renders museum details and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(museum=>{
     db.Piece.find({museum: req.params.id})
     .then(pieces=>{
       console.log("pieces" , pieces)
      res.render('museums/show',{ museum, pieces });
     })
     .catch(err=>{
      console.log('Error finding pieces at the museum', err)
      res.render('error')
    })

  })
  .catch(err=>{
    console.log('Error finding museum', err)
    res.render('error')
  })
});

module.exports = router;
