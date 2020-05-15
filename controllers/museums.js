// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums=>{
    res.render('museums/index',{museums});
  })
  .catch(err=>{
    console.log('ERROR in museum route', err)
    res.render('error')
  })
 
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
    .then(newMuseum=>{
        res.redirect('/museums')
    })
    .catch(err=>{
        console.log('ERROR in post route', err)
        if(err.name == "ValidationError"){
            res.status(406).send({message: 'Validation error'})
        }
        else
            res.status(503).send({message: 'Server or database error'})
    })
});

router.get('/new', (req, res) => {
    res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum=>{
     db.Piece.find({museum: req.params.id})
     .then(pieces=>{
       console.log("pieces" , pieces)
      res.render('museums/show',{ museum, pieces });
     })
     .catch(err=>{
      console.log('ERROR in museum /: id route', err)
      res.render('error')
    })
  
  })
  .catch(err=>{
    console.log('ERROR in museum /: id route', err)
    res.render('error')
  })
  
});

router.delete('/:id',(req,res)=>{
  db.Piece.deleteMany({museum: req.params.id})
  .then(pieces=>{
      db.Museum.findByIdAndDelete(req.params.id)
      .then(museum=>{
       // console.log("museum deleted",museum)
       // console.log("pieces deleted",pieces)
        res.redirect("/museums")
      })
      .catch(err=>{
        console.log('ERROR in delete museum /: id route', err)
        res.render('error')
      })
  })
  .catch(err=>{
    console.log('ERROR in delete museum /: id route', err)
    res.render('error')
  })

}) 

module.exports = router;
