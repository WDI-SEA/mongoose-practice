// Require needed modules
let db = require('../models')
const express = require('express')

// Declare router
const router = express.Router()

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
    // res.send(museums)
  res.render('museums/index', { museums })
  })
  .catch(err => {
    console.log('Error in populating museums', err)
  })
})

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  .then(newMuseum => {
    // res.status(201).send(newMuseum)
    res.redirect('/museums')
  })
  .catch(err => {
    console.log('Error in creating museum', err)
  })
})

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new')
})

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
    .then(museum => {
      if (museum) {
        res.render('museums/show', { museum })
      }
    })
    .catch(err => {
      console.log('Error in showing the museum', err)
    })
})

module.exports = router
