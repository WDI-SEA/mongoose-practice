// Require Mongoose node module
const mongoose = require('mongoose');

let museumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})
// TODO: Use schema to create model

// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)