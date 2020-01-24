// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  .then(pieces => {
    res.render('pieces/index', { pieces });
  })
  .catch(err => {
    res.send('Error in find all pieces')
    console.log('Error in find all pieces', err)
  })
});

router.post('/', (req, res) => {
  console.log(req.body)
  db.Piece.findOne({
    name: req.body.name
  })
  .then(piece => {
    if(piece) {
      window.alert('This work already exists!')
    }
    db.Piece.create({
      name: req.body.name,
      image: req.body.image
    })
    piece.creator.push({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthyear: req.body.birthyear,
        deathyear: req.body.deathyear
    })
    piece.save(err => {
      if(err) {
        res.send('Error in piece.save')
        console.log('Error', err)
      }
      else {
        console.log(`Success, ${piece} was added!`)
      }
    })
  .catch(err => {
      console.log('Error', err)
    })
  })
})


router.get('/new', (req, res) => {
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  db.Piece.findOne({_id: req.params.id})
  .then((piece) => {
    res.render('pieces/show', { piece })
  })
  .catch(err => {
    res.send('Error in find One piece')
    console.log('Error in findOne', err)
  })
});

module.exports = router;
