// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

const db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('muesum')
  .then(pieces => {
  	res.render('pieces/index', { pieces })
  })
  .catch(err => {
  	console.log('Error', err)
  	res.render('error', {
  		message: 'Error in GET /pieces'
  	})
  })
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create({
  	name: req.body.name,
  	image: req.body.image,
  	museum: req.body.museum,
  	creator: {
  		firstname: req.body.creator_firstname,
  		lastname: req.body.creator_lastname,
  		image: req.body.creator_image,
  		birthyear: req.body.creator_birthyear,
  		deathyear: req.body.creator_deathyear
  	}
})
  .then(result => {
  	res.redirect('/pieces/' + result.id)
  })
   .catch(err => {
  	console.log('Error', err)
  	res.render('error', {
  		message: 'Error in GET /pieces'
  	})
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .select({ name: 1 })
  .exec()
  .then(museums => {
  	res.render('pieces/new', {museums});
  })
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findById(req.params.id)
  .populate('museum')
  .then(piece)
  res.send('pieces/show');
});

module.exports = router;
