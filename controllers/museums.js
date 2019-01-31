// Require needed modules
const express = require('express');
const db = require('../models');
// Declare router
const router = express.Router();



router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museum => {
  	res.render('museums/index', {museum: museum});  	
  })
  .catch(err => {
  	console.log(err);
  	res.status(404).send('Page Not Found')
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  .then(newMuseum => {
  	console.log(newMuseum)
  	res.redirect('/museums');
  })
  .catch(err => {
  	console.log(err);
  	res.status(404).send('Page Not Found')
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

// TODO: Replace stub route with page that renders museum details
router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum => {
    if(museum) {
      // We found a museum, let's query to get the pieces in this museum by id.
      db.Piece.find({ museum: museum.id })
      .then(pieces => {
        museum.pieces = pieces || [];
        res.render('museums/show', { museum: museum })
      })
      .catch(err => {
        console.log('Error in getting pieces in GET/museums/:id ', err);
        res.status(404).send('Make an error page!')      
      }) 
    } 
    else {
      // There was no museum found with this id!
      res.send('TODO: Decide what to show user if no museum with that id was found');
    }
  })
  .catch(err => {
  	console.log('Error in GET/museums/:id route: ', err);
  	res.status(404).send('Make an error page!')
  })
});

module.exports = router;






