// Require database
const db = require('../models');
// Require needed modules
const express = require('express');
// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(results => {
    res.render("pieces/index", {
      pieces: results
    });
  })
  .catch(err => {
    console.log(err);
    res.send("error in GET /pieces");
  });
  // res.render('pieces/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  console.log(req.body)
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    creator: {
      firstname: req.body.creatorFirstname,
      lastname: req.body.creatorLastname,
      birthYear: +req.body.creatorBirthyear,
      deathYear: +req.body.creatorDeathyear
    },
    museum: req.body.atMuseum
  })
    .then(results => {
      res.redirect("pieces");
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "POST /pieces database flub"
      });
    });
  // res.send('STUB - NEW PIECES POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(results => {
    res.render("pieces/new", {
      museums: results
    });
  })
  .catch(err => {
    console.log(err);
    res.render('404');
  });
  // res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findOne()
  .then(results => {
    console.log(results)
    res.render("pieces/show", {
      piece: results
    });
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
  // res.send('pieces/show');
});

module.exports = router;
