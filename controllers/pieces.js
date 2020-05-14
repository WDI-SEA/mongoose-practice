// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  .populate('museum')
  .then(pieces=>{
    res.render('pieces/index',{pieces});
  })
  .catch(err=>{
    console.log('ERROR in piece route', err)
    res.render('error')
  })
  ;
});

router.post('/', (req, res) => {
  console.log(req.body)

  piece={
    name: req.body.name,
    image: req.body.image,
    originCountry: req.body.originCountry,
    museum: req.body.museum,
    creator:{
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.museumImage
    }
  }

  db.Piece.create(piece)
  .then(newPiece=>{
      res.redirect('/pieces')
  })
  .catch(err=>{
      console.log('ERROR in post route', err)
      if(err.name == "ValidationError"){
          res.status(406).send({message: 'Validation error'})
      }
      else
          res.status(503).send({message: 'Server or database error'})
  })

});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums=>{
    res.render('pieces/new',{museums});
  })
  .catch(err=>{
    console.log('ERROR in new piece route', err)
    res.render('error')
  })
  
});

router.get('/:id', (req, res) => {
 
  db.Piece.findById(req.params.id)
  .populate('museum')
  .then(piece=>{
    res.render('pieces/show',{piece});
  })
  .catch(err=>{
    console.log('ERROR in pieces route', err)
    res.render('error')
  })
 
});

module.exports = router;
