'use strict';

const mongoose = require('mongoose');


let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Product', productSchema);
