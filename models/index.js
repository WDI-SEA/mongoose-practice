// Require mongoose node module
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL || 'mongodb://localhost:27017/hellowdi20', { useNewUrlParser: true});

// TODO: Require your other models, and export them

// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
module.exports.Piece = require('./piece');
