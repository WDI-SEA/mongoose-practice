// Require mongoose node module
const mongoose = require('mongoose');

// TODO: Connect to Mongo database
mongoose.connect(process.env.MONGOOSE_URL || 'mongodb://localhost:27017/museumexplorer', { useNewUrlParser: true });
											 // we can call this whatever we want it to be called 
											 // it will create it at the first attempt when you try to insert something 
// TODO: Require your other models, and export them
module.exports.Museum = require('./museum');
module.exports.Piece = require('./piece');


// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
