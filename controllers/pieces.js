// Require needed modules
const express = require('express');
const mongoose = require('mongoose');

// Declare router
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
    db.Piece.find()
    //'museum' is the field name in the schema
    //populate acts like 'include' in Nodejs
    //if not populate, museum shows up as id in BSON
    .populate('museum')
    .then( pieces => {
    	res.render('pieces/index', { pieces: pieces });
    })
	.catch(err => {
		console.log('Error in GET / pieces route:', err);
		res.send('TODO: Create error.ejs to render nice error pages!')
	});
});

router.post('/', (req, res) => {
	db.Piece.create({
		name: req.body.name,
		originCountry: req.body.originCountry,
		image: req.body.image,
		museum: req.body.museum,
		creator: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			cimage: req.body.cimage,
			birthyear: req.body.birthyear,
			deathyear: req.body.deathyear
		}
	})
	.then(function(){
		res.redirect('/pieces');
	})
	.catch(function(err){
		console.log(err);
		res.status(500).send({ message: 'Server Error'	});
	})
});

router.get('/new', (req, res) => {
    db.Museum.find()
  .then(museums=> {
  	res.render('pieces/new', {museums : museums});
  })
  .catch(err => {
  	console.log(err);
  	res.status(500).send({ message: 'Server Error'	});
  })
});

router.get('/:id', (req, res) => {
 db.Piece.findById(req.params.id)
  .then(piece => {
  	res.render('pieces/show', { piece: piece });
	})
  .catch(err => {
  	console.log('Error in GET /museums/:id route:', err);
  	res.status(500).send({ message: 'Server Error'	});
  });
});

module.exports = router;
