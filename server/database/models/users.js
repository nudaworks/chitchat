'use strict';

const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: Number,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  activated: {
    type: Boolean,
    default: false
  },
  activateCode: {
    type: String
  },
  registerDatetime: {
    type: Date,
    default: Date.now()
  },
  activateDatetime: {
    type: Date
  },
  token: {
    type: String
  },
  tokenExprireDatetime: {
    type: Date
  }
});

module.exports = mongoose.model('User', userSchema);
