// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museumData => {
    res.render('museums/index', museumData={museumData});
  })
  .catch(err => {
    console.log('Museum Render broken', err)
  })
});

router.post('/', (req, res) => {
  console.log(req.body)
  db.Museum.create(req.body)
  .then(museumData => {
    res.send(museumData)
  })
  .catch(err => {
    console.log('creating museum error: ', err)
  })
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findOne({_id: req.params.id})
  .then(museumData => {
    db.Piece.find({museum: museumData._id})
    .then(pieces => {
      res.render('museums/show', {pieces, museumData} )
    })
    .catch(err2 => {
      console.log('an error2', err2)
    })
  })
  .catch(err1 => {
    console.log('an error1', err1)
  })
});

module.exports = router;
