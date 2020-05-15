// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: list of all museums
  db.Museum.find()
  .then(museum => {
res.render('museums/index', museum={museum})
  })
  .catch(err => {
    console.log('It broke', err)
  })
});

router.post('/', (req, res) => {
  // TODO:adding new museum
  db.Museum.create(req.body)
  .then(museum => {
    res.send(museum)
  })
  .catch(err => {
    console.log('Problems', err)
  })
});

router.get('/new', (req, res) => {
  // TODO: adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findOne({_id: req.params.id})
  .then(museum => {
    db.Piece.find({museum: museum._id})
    .then(pieces => {
      res.render('museums/show', {museum: museum, pieces} )
    })
      .catch(err => {
        console.log('problem', err)
      })
    })
    .catch(err => {
      console.log('problem', err)
    })
  })


module.exports = router;
