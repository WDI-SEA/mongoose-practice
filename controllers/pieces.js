// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
      res.render('pieces/index', { pieces });
      
  })
  .catch(err => {
      console.log(err)
      res.send("Error in GET /pieces route")
})
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create({
      name: req.body.name,
      image: req.body.image,
      museum: req.body.museum,
      creator: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        image: req.body.creatorimage,
        birthyear: req.body.birthyear,
        deathyear: req.body.deathyear
        
      }
  })
  .then(createdPiece => {
      console.log('New Piece Added: ', createdPiece)
      res.redirect('/pieces')
  })
  .catch(err => {
      console.log(err)
      res.send('Error in adding New Piece')
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then( museums => {
      res.render('pieces/new', { museums });

  })
  .catch((err) => {
      console.log(err)
      res.send('Error in GET /pieces/new')
})
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findById(req.params.id)
  .populate('museum')
  .then(foundPiece => [
      res.render('pieces/show', { foundPiece })
  ])
  .catch(err => {
      console.log(err)
      res.send('Error in GET /pieces/show route')
  })
});

module.exports = router;
