// Require Mongoose node module
const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Create Museum Schema
let museumSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  image: String
})
//  Use schema to create model Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)
