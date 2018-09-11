// Require Mongoose node module
const mongoose = require('mongoose');
var router = express.Router();
var express = require('express');

router.get('/',(req, res) =>{
		db.Piece.findAll().then(function(f){
	}).catch(function(err){
		res.render('404');
	});
});

router.post('/', (req,res) => {
	db.Piece.create({
		name:req.body.name,
		image:req.body.image,
		museum: req.body.museum
	}).then(result =>{
		res.redirect('/pieces');
	}).catch(err => {
		console.log(err);
		res.render('error');
	})
});