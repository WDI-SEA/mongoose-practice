// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  	.populate('museum')
	.then(piece=>{
		res.render('pieces/index', { piece: piece })
		// res.send(piece)
	})
	.catch((err) => {
	    console.log('Error /piece', err)
	    res.send('main/404', err)
	  })
});

router.post('/', (req, res) => {

	console.log(req.body)
	db.Piece.create({
		name: req.body.name,
		image: req.body.image,
		museum:req.body.museum,
		creator:{
			firstname:req.body.firstname,
			lastname: req.body.lastname,
			image: req.body.image2,
			birthyear: req.body.birthyear,
			deathyear: req.body.deathyear
		}
	})
	.then(createdPiece =>{
		res.redirect('/pieces')
	})
	.catch((err) => {
	    console.log('Error in POST /pieces', err)
	    res.send('main/404', err)
	  })

});

router.get('/new', (req, res) => {
	db.Museum.find()
	.then(museum=>{
		res.render('pieces/new', { museum: museum })
	})
	.catch((err) => {
	    console.log('Error /museum', err)
	    res.send('main/404', err)
	  })
});

router.get('/:id', (req, res) => {


	db.Piece.findById(req.params.id)
	.populate('museum')
	.then(foundPiece=> {
		// res.send(foundPiece)
		res.render('pieces/show', { piece: foundPiece })
	})
	.catch((err) => {
	    console.log('Error in POST /museums/:id', err)
	    res.send('main/404', err)
	  })
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  // res.send('pieces/show');
});

module.exports = router;
