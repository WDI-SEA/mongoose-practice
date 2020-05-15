// Require Mongoose node module
const mongoose = require('mongoose');

// Create Museum Schema
let museumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city:  {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})


//  Export Museum Model

module.exports = mongoose.model('museum', museumSchema)