// Require needed modules
const express = require("express");
const db = require("../models");

// Declare router
const router = express.Router();

router.get("/", (req, res) => {
  db.Piece.find()
    .populate('museum')
    .then(results => {
      res.render("pieces/index", {
        pieces: results
      });
    })
    .catch(err => {
      console.log(err);
      res.send("error in GET /pieces");
    });
});

router.post("/", (req, res) => {
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    creator: {
      firstname: req.body.creatorFirstname,
      lastname: req.body.creatorLastname,
      birthYear: +req.body.creatorBirthyear,
      deathYear: +req.body.creatorDeathyear
    },
    museum: req.body.atMuseum
  })
    .then(results => {
      res.redirect("pieces");
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "POST /pieces database flub"
      });
    });
});

router.get("/new", (req, res) => {
  db.Museum.find()
    .then(results => {
      res.render("pieces/new", {
        museums: results
      });
    })
    .catch(err => {
      console.log(err);
      res.send(`${err}`);
    });
});

router.get("/:id", (req, res) => {
  db.Piece.findOne()
  .then(results => {
    res.render("pieces/show", {
      piece: results
    });
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
});

module.exports = router;
