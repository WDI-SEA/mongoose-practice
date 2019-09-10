// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
let museumSchema = new mongoose.Schema({
    name: String,
    city: String,
    country: String,
    image: String
})
// TODO: Use schema to create model

module.exports = mongoose.model('Museum', museumSchema)

// TODO: Export Museum Model
