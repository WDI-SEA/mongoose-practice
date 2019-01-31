// Require needed modules
const express = require('express');
const mongoose = require('mongoose');
//Include our models
const db = require('../models');
// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  	db.Museum.find()
  	.then(museums => {
	res.render('museums/index', {museums: museums});	
	})
	.catch(err => {
		console.log(err);
		res.status(500).send({ message: 'Server Error'	});
	});
});

router.post('/', (req, res) => {
	db.Museum.create({
		name: req.body.name,
		city: req.body.city,
		country: req.body.country,
		image: req.body.image
	})
	.then(function(){
		res.redirect('/museums');
	})
	.catch(function(err){
		console.log(err);
		res.status(500).send({ message: 'Server Error'	});
	})
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.find()
  .then(museum=> {
  	res.render('museums/new');
  })
  .catch(err => {
  	console.log(err);
  	res.status(500).send({ message: 'Server Error'	});
  })
});

router.get('/:id', (req, res) => {
  // Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(museum => {
  	if(museum){
  	//we found a museum. Let's do a query to get the pieces in this museum (by id)
 	db.Piece.find({ museum: museum.id }) //alternatively use req.params.id
 	.then(pieces => {
 		museum.pieces = pieces || [];
 		res.render('museums/show', { museum: museum });
 	})
 	.catch(err => {
 		console.log('Error fetching pieces in GET /museums/:id', err);
 		res.status(500).send({ message: 'Server Error'	});
 	})
 	} else {
 		res.send('TODO: Decide what to show user if no museum with that id was found');
 	}	

  })
  .catch(err => {
  	console.log('Error in GET /museums/:id route:', err);
  	res.status(500).send({ message: 'Server Error'	});
  });
});

module.exports = router;
