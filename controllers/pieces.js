// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare a reference to the models
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')         // populate the museum from the piece model in pieces.
  .then(piece => {
  	res.render('pieces/index', { pieces: piece});
  })
  .catch(err => {
  	console.log(err);
   res.render('error');
 });

});


// POST route
router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  // res.send('STUB - NEW PIECES POST');
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    originCountry: req.body.originCountry,
    museum: req.body.museum,
    creator: {
      firstname: req.body.creator_firstname,
      lastname: req.body.creator_lastname,
      image: req.body.creator_image,
      birthyear: req.body.creator_birthyear,
      deathyear: req.body.creator_deathyear
    }
  })
  .then(result => {
    res.redirect(`/pieces/${result.id}`);
  })
  .catch(err => {
    console.log(err);
    res.render('error');
  });
});


// Show the new form 
router.get('/new', (req, res) => {

  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', { museums: museums });
  })
  .catch(err => {
    console.log(err);
     res.render('error'); 
  });
  //res.render('pieces/new');
});


// SHow individual pieces
router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in

  db.Piece.findById(req.params.id)
  .then(piece => {
    res.render('pieces/show', { piece: piece });
  })
  .catch(err => {
    console.log(err);
    res.send('error');

  });
});

module.exports = router;
