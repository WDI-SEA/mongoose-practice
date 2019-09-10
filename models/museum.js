// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
let museumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: String,
    country: String,
    image: String
})

// TODO: Use schema to create model
// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)