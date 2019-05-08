// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

let db = require('../models')


router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
		res.render('museums/index', { museums })
	})
	.catch((error) => {
		console.log('error', error)
		res.send('error')
	})
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  console.log(req.body)
	db.Museum.create({
		name: req.body.name,
		city: req.body.city,
		country: req.body.country,
		image: req.body.image,		
	})
	.then(newMuseum => {
		console.log('museum', newMuseum)
		res.redirect('/museums')
	})
	.catch((error) => {
		console.log('error', error)
		res.send('Ahh shit')
	})
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  db.Museum.findById(req.params.id)
	.then(foundMuseum => {
		res.render('museums/show', {foundMuseum});
	})
	.catch((error) => {
		console.log('error', error)
		res.send('error')
	})
  //  and a list of pieces that musuem contains
});

module.exports = router;
