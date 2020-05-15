// Require mongoose node module
const mongoose = require('mongoose');

// Connect to Mongo database
mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/museumexplorer',
  { useNewUrlParser: true, useUnifiedTopology: true});

// Require your other models, and export them
// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
module.exports.Museum = require('./museum');
module.exports.Piece = require('./piece');


