// Require needed modules
const express = require('express');

const db = require('../models');
// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
    .then(museums => {
      res.render('museums/index',{museums: museums});
    }).catch( error => {
      res.send(error);
    });
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
    .then(museum => {
      res.redirect('/museums');
    }).catch(error => {
        res.send(error);
    });
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
    .then(museum => {
      db.Piece.find({museum: museum.id})
        .then(pieces => {
        res.render('museums/show', {museum: museum, pieces: pieces});
        }).catch(error => res.send(error));
    }).catch(error => {
      res.send(error);
    });
});

module.exports = router;
