// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
let museumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 64
    },
    city: {
        type: String,
        required: true,
        minlength: 2
    },
    country: {
        type: String,
        required: true,
        minlength: 2
    },
    image: {
        type: String,
        default: 'https://media.timeout.com/images/102779434/image.jpg'
    }
})

// TODO: Use schema to create model
var Museum = mongoose.model('Museum', museumSchema)

// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)
