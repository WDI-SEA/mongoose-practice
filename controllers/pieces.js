// Require needed modules
let db = require('../models')
const express = require('express')

// Declare router
const router = express.Router()

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .then(pieces => {
  res.render('pieces/index', { pieces })
  })  
  .catch(err => {
    console.log('Error loading the pieces', err)
  })
})

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create(req.body)
  .then(newPiece => {
    // res.status(201).send(newPiece)
    res.redirect('/pieces')
  })
  .catch(err => {
    console.log('Error adding that piece', err)
  })
})

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new')
})

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  // Piece.findById(id).populate('museum').exec((err, piece) => {
    //   console.log('Here is the piece', piece)
    // })
  db.Piece.findById(req.params.id)
  .then(piece => {
    if (piece) {
      res.render('pieces/show', { piece })
    }
  })
  .catch(err => {
    console.log('There was an error displaying that piece', err)
  })
})

module.exports = router
