// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then((museums) => {
    res.render('museums/index', {museums});
  })
  .catch(err => {
    console.log('Error in GET /museums', err)
  })
});

router.post('/', (req, res) => {
  console.log(req.body)
  db.Museum.findOne({
    name: req.body.name
  })
  .then(museum => {
    if(museum) {
      window.alert('This museum has already been added.')
    }
    db.Museum.create({
      name: req.body.name,
      city: req.body.city,
      country: req.body.country,
      image: req.body.image
    })
    .then(newMuseum => {
      console.log(`${newMuseum} was added successfully!`)
      res.redirect('/museums')
    })
    .catch(err => {
      res.send('Error in create')
      console.log('Error', err)
    })
  })
  .catch(err => {
    res.send('Error in findOne')
    console.log('Error', err)
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findOne({_id: req.params.id}).
    populate('Pieces').
    exec((err, museum) => {
      if (err) {
        console.log('Error in db.museum.findONe', err)
      }
      console.log(museum)
      res.render('museums/show', {museum});
    })
});

// // Code for museums/show that wasnt working....yet
// <% museum.piece.forEach((mus) => { %>
//   <div class="piece-container">
//       <img src="<%= mus.image %>">
//       <p><%= mus.name %></p>
//   </div>
// <% }) %>


module.exports = router;
