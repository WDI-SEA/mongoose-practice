// Require Mongoose node module
const mongoose = require('mongoose');

//  Museum Schema
let museumSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city: String,
    country: String,
    image: String
})

//Use schema to create model and  Export Museum Model

module.exports = mongoose.model('Museum', museumSchema)
