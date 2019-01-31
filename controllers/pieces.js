// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
  	//res.send(pieces)
  	res.render('pieces/index', { pieces: pieces });
  })
  .catch(err => {
  	console.log('Error in GET pieces route:', err);
  	res.send('TODO: Create an error.ejs to render')
  })
});

router.post('/', (req, res) => {
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    originCountry: req.body.originCountry,
    creator: {
      firstname: req.body.creatorfirstname,
      lastname: req.body.creatorlastname,
      image: req.body.creatorimage,
      birthyear: req.body.creatorbirthyear,
      deathyear: req.body.creatordeathyear
    }
  })
  .then(piece => {
    res.send(piece)
  })
  .catch(err => {
    console.log('Error creating new Piece', err);
    res.send('Error!')
  })
});

router.get('/new', (req, res) => {
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .then(piece => {
    res.render('pieces/show', { p: piece })
  })
  .catch(err => {
    console.log('Error showing piece page',  err);
    res.send('Error!')
  })
});

module.exports = router;
