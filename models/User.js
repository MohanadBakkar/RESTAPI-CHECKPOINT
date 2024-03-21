const mongoose = require('mongoose');

// Define the schema
const mongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  species: {
    type: String,
    required: false
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

// Create and export the mongoose model
module.exports = mongoose.model('User', mongooseSchema);