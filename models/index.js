// Require mongoose node module
const mongoose = require('mongoose');

// Connect to Mongo database
mongoose.connect(process.env.MONGOOSE_URL || 'mongodb://localhost:27017/hellowdi20', { useNewUrlParser: true });

// Require your other models, and export them
module.exports.Museum = require('./museum');
module.exports.Piece = require('./piece')

// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
