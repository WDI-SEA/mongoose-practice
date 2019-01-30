// Require mongoose node module
const mongoose = require('mongoose');

// TODO: Connect to Mongo database
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser:true });

// TODO: Require your other models, and export them
const Museum = require('./museum.js');
const Piece = require('./piece.js');

module.exports.Museum = Museum
module.exports.Piece = Piece
// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
