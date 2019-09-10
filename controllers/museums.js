// Require needed modules
const express = require('express');
const db = require("../models");

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
	res.render('museums/index', { museums });
  })
  .catch(err => {
  	console.log(err);
  	res.send("Error finding list of museums");
  })
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  .then(result => {
  	res.redirect("/museums");
  })
  .catch(err => {
   	console.log(err);
  	res.send("Error creating new museum record");
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.find({ _id: req.params.id})
  .then(([museum]) => {
  		db.Piece.find({ museum: museum._id })
  		.then(pieces => {
			res.render('museums/show', { museum: museum, pieces: pieces });  	

  		})
  		.catch(err => {
  			console.log(err);
  			res.send("Error finding pieces");
  		})
  })
  .catch(err => {
  	console.log(err);
  	res.send("Error finding museum by id");
  })
});

module.exports = router;
