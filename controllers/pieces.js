// Require needed modules
const express = require('express');
const db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find({
    _id: "5cd2ec68c8262a3f40c8a175"
  })
  .populate('Museum')
  .then(found => {
    console.log(found);
    // res.redirect('/pieces/new');
    res.render('pieces/index', {found: found});
  })
});

router.post('/', (req, res) => {
  db.Museum.find({
    _id: req.body.museum
  })
  .then(foundMuseum => {
    foundMuseum = foundMuseum[0]
    console.log(req.body.museum);
    console.log("foundMuseum:");
    console.log(foundMuseum);
    db.Piece.create({
      name: req.body.name,
      image: req.body.image,
      museum: req.body.museum,
      creator: {
        firstName: req.body.creatorfirstname,
        lastName: req.body.creatorlastname,
        image: req.body.creatorimage,
        birthYear: req.body.creatorbirthyear,
        deathYear: req.body.creatordeathyear
      }
    })
    .then((created) => {
      console.log(created);
      res.redirect('/pieces')
    })
  })
});

router.get('/new', (req, res) => {
  db.Museum.find()
  .then(museumsList => {
    res.render('pieces/new', {museumsList});
  })
});

router.get('/:id', (req, res) => {
  db.Piece.findById(
    req.params.id
  )
  .populate('museum')
  .then(foundPiece=> {
    console.log(foundPiece);
    res.render('pieces/show', {foundPiece:foundPiece});
  })
});

module.exports = router;
