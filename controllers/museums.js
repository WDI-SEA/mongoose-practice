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
  		res.send(museums);
	// res.render('museums/index', {museums: museums});	
	})
	.catch(err => {
		console.log(err);
		res.status(500).send({ message: 'Server Error'	});
	});
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
  res.send('museums/show');
});

module.exports = router;
