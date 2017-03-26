'use strict';

const express = require('express');
const fs = require('fs');

const privateKey = require('../api.config').privateKey;
const jwt = require('jsonwebtoken');


function ctrlIndex(app){

  let router = express.Router();

  let ctrl = {};
  ctrl.store = require('./store');
  ctrl.auth = require('./auth');

  // app.use(protectEndpoint);
  app.use('/api', router);



  router.use((req, res, next) => {
    console.log('smth is happening:', req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  router.get('/', (req, res, next) => {
    res.json({ message: 'hooray! welcome to our API!' });
    next();
  });

  router.route('/register')
    .post(ctrl.auth.registerUser)
  ;
  
  router.route('/activate')
    .post(ctrl.auth.activateUser)
  ;
  
  router.route('/login')
    .post(ctrl.auth.loginUser)
  ;


  
  router.route('/products/:productId')
    .get(ctrl.store.getProduct)
    .patch(ctrl.store.updateProduct)
    .delete(ctrl.store.deleteProduct)
  ;

  router
    // .route('/products')
    .all('/products', protectEndpoint)
    .get('/products', ctrl.store.getProducts)
    .post('/products', ctrl.store.createProduct)
  ;

}


function protectEndpoint(req, res, next) {
  let token = retreiveToken(req);
  console.log('retreived Token:', token);
  if (req.method === 'OPTIONS') {
    next();
    // console.log(next)
    console.log("opts!");
  } else if (token) {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Failed to authentificate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
  // else {
  //   return res.status(403).send({
  //     success: false,
  //     message: 'No token provided.'
  //   });
  // }
}


function retreiveToken(req) {
  let aToken = req.headers['authorization'];
  let rToken;
  if (aToken && aToken.indexOf('Token') > -1) {
    rToken = aToken.substr(6);
  } else {
    rToken = aToken;
  }
  return req.body.token || req.query.token || req.headers['x-access-token'] || rToken;
}


module.exports = ctrlIndex;
