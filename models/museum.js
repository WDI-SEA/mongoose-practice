// One museum has many pieces

// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
const museumSchema = new museumSchema({
    name: String,
    city: String,
    country: String,
    imageUrl: String
});

// TODO: Use schema to create model
const Museum = mongoose.model('Museum', museumSchema);

// TODO: Export Museum Model
module.exports = Museum;