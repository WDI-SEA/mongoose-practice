// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', { museums: museums });
  })
  .catch(err => {
    console.log('Error in the /museums/index GET route', err);
    res.send('ERROR!')
  })
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  .then(museum => {
    res.redirect('/museums/')
  })
  .catch()
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum => {
  	if(museum){
	  	//We found a museum. Let's do a query to get the pieces in this museum by id
	  	db.Piece.find({ museum: museum.id })
	  	.then(pieces =>{
	  		museum.pieces = pieces || [];
	  		res.render('museums/show', { museum: museum })
	  	})
	  	.catch(err => {
	  		console.log('Error fetching pieces in the GET museums/:id route!', err);
	  		res.send('Error page!');
	  	})
	  } else {
	  	res.send('Museum by that id not found!')
	  }
  })
  .catch(err =>{
  	console.log('Error in GET /museums/id route:', err);
  	res.send('TODO: make an error.ejs');
  })
});

module.exports = router;
