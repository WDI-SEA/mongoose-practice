// Require Mongoose node module
const mongoose = require('mongoose');

// Create Museum Schema

const museumSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    city: String,
    country: String,
    image: String
    }
)

// Use schema to create model & export
module.exports = mongoose.model('Museum', museumSchema)

