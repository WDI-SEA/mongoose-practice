// Require needed modules
const express = require('express');
const db = require("../models");

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Piece.find()
  .populate("museum")
  .then(pieces => {
  	console.log("PIECES:", pieces);
	res.render('pieces/index', {
		pieces });
  })
  .catch(err => {
  	console.log(err);
  	res.send("Error finding list of pieces");
  })
});

router.post('/', (req, res) => {
	console.log("Pieces POST:", req.body);
 db.Piece.create({
 	name: req.body.name,
 	creator: db.Creator.create ({
 		firstname: req.body.creatorfirstname,
 		lastname: req.body.creatorlastname 
 	}),
 	museum: req.body.museum,
 	image: req.body.image
 	})
  .then(result => {
  	res.redirect("/pieces");
  })
  .catch(err => {
   	console.log(err);
  	res.send("Error creating new piece record");
  })
});

router.get('/new', (req, res) => {
	db.Museum.find()
	.then(museums => {
	  res.render('pieces/new', { museums: museums });
	})
	.catch(err => {
		console.log(err);
		res.send("ERROR finding museums");
	})
});

router.get('/:id', (req, res) => {
  db.Piece.find({ _id: req.params.id})

  .populate("museum")
  .then(([piece]) => {
  		console.log("PIECE:", piece);
	  res.render('pieces/show', { piece });  	
  })
  .catch(err => {
  	console.log(err);
  	res.send("Error finding piece by id");
  })});

module.exports = router;
