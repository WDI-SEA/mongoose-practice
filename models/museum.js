// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
// TODO: Use schema to create model
let museumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image: String,
})

// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)


