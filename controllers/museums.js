// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare a reference to the models
const db = require('../models');


router.get('/', (req, res) => {   // handle the situation if there isn't data
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums=> {
  	res.render('museums/index', { museums: museums });
  })
  .catch(err => {
	  console.log('Error Message', err);
    res.render('error');
  });
  //res.render('museums/index');
});



// ================> Post route for registering a new museum
router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  //res.send('STUB - NEW MUSEUM POST');
  console.log(req.body);
  db.Museum.create(req.body)
  .then(result => {
    console.log(result)
    res.redirect(`/museums/${result.id}`);
  })
  .catch(err => {
    console.log('Error Message', err);
    res.render('error');
  });
});





router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});




// Show route for individual museums.
router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(museum => {
    db.Piece.find({ museum: museum.id })
    .then(pieces => {
      museum.pieces = pieces || [];
      res.render('museums/show', { museum: museum });
    })
    .catch(errInner => {
      console.log(errInner);
      res.render('error');
    });
  })
  .catch(err => {
    console.log(err);
    res.render('error');
  });
});

module.exports = router;



