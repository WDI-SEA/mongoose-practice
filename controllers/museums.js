// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
	db.Museum.find()
	.then(museum=>{
		res.render('museums/index', { museum: museum })
	})
	.catch((err) => {
	    console.log('Error /museum', err)
	    res.send('main/404', err)
	  })
})

router.post('/', (req, res) => {
	
	console.log(req.body)
	db.Museum.create({
		name: req.body.name,
		city: req.body.city,
		country: req.body.country,
		image: req.body.image
	})
	.then(createdMuseum =>{
		res.redirect('/museums')
	})
	.catch((err) => {
	    console.log('Error in POST /museums', err)
	    res.send('main/404', err)
	  })

})

router.get('/new', (req, res) => {
	res.render('museums/new')
})

router.get('/:id', (req, res) => {
	
	db.Museum.findById(req.params.id)
	.populate('pieces')
	//should i search pieces for the museum id 
	//- since it's a one to many?
	.then(foundMuseum=> {
		// res.send(foundMuseum)
		res.render('museums/show', { museum: foundMuseum })
	})
	.catch((err) => {
	    console.log('Error in POST /museums/:id', err)
	    res.send('main/404', err)
	  })
})

module.exports = router;
