'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const apiConfig = require('./api.config');
require('./database')();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

require('./controllers')(app);

app.listen(apiConfig.port, () => {
  console.log('Server runs on port:', apiConfig.port);
});




