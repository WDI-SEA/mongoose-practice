// Require needed modules
const express = require('express');

let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
    console.log(pieces)
    res.render('pieces/index', {pieces})
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })
});

router.post('/', (req, res) => {
    db.Piece.create({
      name: req.body.name,
      image: req.body.image,
      museum: req.body.museum,
      creator: [{
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        image: req.body.creatorimage,
        birthYear: req.body.birthYear,
        deathYear: req.body.deathYear
      }]
    })
    .then(piece => {
      res.redirect('/pieces')
    })
    .catch(err => {
      console.log(err)
      res.send('Error')
    })
});

router.get('/new', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', {museums});
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })
});

router.get('/:id', (req, res) => {
  db.Piece.findOne({_id: req.params.id})
  .populate("museum")
  .then(piece => {
    console.log(piece)
    res.render('pieces/show', {piece})
  })
  .catch(err => {
    console.log(err)
    res.send('Error')
  })
});

module.exports = router;
