// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare reference to models
const db = require('../models');


// Declare routes
router.get('/', (req, res) => {
	db.Piece.find()
	.populate('museum')
	.then(pieces => {
  	res.render('pieces/index', {pieces: pieces});		
	})
	.catch(err => {
		console.log(err);
		res.render('error');
	});
});

router.post('/', (req, res) => {
	db.Piece.create({
		name: req.body.name,
		image: req.body.image,
		museum: req.body.museum,
		creator: {
			firstname: req.body.creatorfirstname,
			lastname: req.body.creatorlastname,
			image: req.body.creatorimage,
			birthyear: req.body.creatorbirthyear,
			deathyear: req.body.creatordeathyear
		}
	})
	.then(result => {
		res.redirect(`/pieces/${result.id}`);
	})
	.catch(err => {
		console.log(err);
		res.render('error');
	});
});

router.get('/new', (req, res) => {
	db.Museum.find()
	.then(museums => {
  	res.render('pieces/new', {museums: museums});		
	})
	.catch(err => {
		console.log(err);
		res.render('error');
	});
});

router.get('/:id', (req, res) => {
	db.Piece.findById(req.params.id)
	.populate('museum')
	.then(piece => {
		res.render('pieces/show', {piece: piece});
	})
	.catch(err => {
		console.log(err);
		res.render('error');
	});
});

module.exports = router;
