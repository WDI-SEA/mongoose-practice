// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

let db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
  	res.render('museums/index', {museums})
  })
  .catch(err => {
  	console.log(err)
  	res.send('oopsie')
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
	db.Museum.create(req.body)
	.then(() => {
		res.redirect('/')
	})
	.catch(err => {
		console.log(err)
	})
	.finally(process.exit())
	
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});


  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
router.get('/:id', (req,res) => {
	db.Museum.findById(req.params.id)
	.then(museum => {
		res.render('museums/show', {museum})
	})
	.catch(err => {
		console.log('error', err)
		res.status(501).send({ message: 'Oops' })
	})
})
  


router.delete('/', (req,res) => {
	db.Museum.remove({})
	.then(museums => {
		res.send('deleted')
	})
	.catch(err => {
		console.lod('error', err)
		res.status(501).send({ message: 'Oops' })
	})
})

module.exports = router;
