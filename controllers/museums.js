// Require needed modules
const express = require('express');
const mongoose = require('mongoose');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  res.render('museums/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.send('STUB - NEW MUSEUM POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  //res.send('museums/show');
  db.Museum.findById(req.params.id)
  .then(museum => {
  	if(museum){ 
  	//we found a museum! yay! do a query to get the pieces by id
	  	db.Piece({ museum: museum.id })
	  	.then(pieces => {
	  		museum.pieces = pieces || [];
	  		res.render('museums/show', { museum: museum });
	  	})
	  	.catch(err => {
	  		console.log('error fetching pieces in GET /museum/:id route:', err);
	  		res.send('no, really, you need an error page')
	  });

  	} 
  	else {
  		res.send('to do: decide what to show user if no museum with that id was found');
  	}
  })
	.catch(err => {
	  	console.log('error fetching museums in GET /museums/:id route:', err);
	  	res.send('need to make a museum-quality error page.');
	  });

});

module.exports = router;

