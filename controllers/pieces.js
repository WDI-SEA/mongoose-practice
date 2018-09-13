// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
  console.log(req.body);
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
  	res.render("pieces/index", {pieces: pieces});
  })
  .catch(err => {
  	console.log("ERROR", err);
  	res.render('error');
  })
});

router.post('/', (req, res) => {
    db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    museum: req.body.museum,
    creator: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthyear: req.body.birth,
      deathyear: req.body.death,
      image: req.body.creatorimage,
    } })
    .then(result => {
      res.redirect("/pieces");
    })
    .catch(err => {
    console.log("ERROR", err);
    res.render('error');
  })
});

router.get('/new', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', {museums: museums})
  })
  .catch(err => {
    console.log("ERROR", err);
    res.render('error');
  });
});

router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .then(piece => {
    res.render('pieces/show', {piece: piece});

  })
  .catch(err => {
    console.log("ERROR", err);
    res.render('error');
  })
});

module.exports = router;
