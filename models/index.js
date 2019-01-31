// Require mongoose node module
const mongoose = require('mongoose')

// TODO: Connect to Mongo database 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/museumexplorer', {useNewUrlParser: true})
// TODO: Require your other models, and export them

// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
module.exports.Museum = require('./Museum')
module.exports.Piece = require('./Piece')