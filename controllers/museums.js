// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

//Require models
const db = require('../models');

router.get('/', (req, res) => {
  db.Museum.find()
  	.then( museums => {
  		console.log('My museums are: ', museums)
  		res.render('museums/index', {building: museums});
  	}).catch(err => {
  		console.log(err);
  		res.send(err);
  	})
  
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  	.then( newMuseum => {
  		console.log('SUCCESS!!!!')
  		console.log('The museum info is: ', newMuseum)
  		res.redirect('/museums')
  	}).catch(err => {
  		console.log(err);
  		res.send(err)
  	});
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
    .then( museum => {
      res.render('museums/show', { museum: museum })
    }).catch( err => {
      console.log(err);
      res.send(err);
    })
});

module.exports = router;
