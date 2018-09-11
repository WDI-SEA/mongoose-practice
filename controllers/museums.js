// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Get reference to the models
const db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
	db.Museum.find()
	.then(museums => {
		console.log(museums)
		res.render('museums/index', {allMuseums: museums});
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	})
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
	db.Museum.create({
		name: req.body.name,
		image: req.body.image,
		country: req.body.country,
		city: req.body.city
	})
	.then(result => {
		res.render('museums/index');
	})
	.catch(err => {
		console.log(err);
	})
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
	// db.Museum.find()
	// .then(museums => {
	// 	console.log(museums)
	// 	res.render('museums/index', {allMuseums: museums});
	// })
	// .catch(err => {
	// 	console.log(err);
	// 	res.send(err);
	// })

 //  res.send('museums/show');
});

module.exports = router;
