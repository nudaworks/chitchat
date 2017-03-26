'use strict';

const mongoose = require('mongoose');

function initDatabase(){
  mongoose.connect('mongodb://localhost/mn');

  mongoose.connection.on('open', () => {
    console.log("CONNECTED!");
  });
}

module.exports = initDatabase;


