'use strict';

const crypto = require('crypto');
const randomJs = require('random-js')();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const privateKey = require('../api.config').privateKey;

let UserService = require('../database/sevices/user');
let Serializer = require('../database/serialize');

let mailer = require('../mailer');

function registerUser(req, res) {
  UserService.getUser({ email: req.body.email }, (err, result) => {
    console.log('RESULT:', err, result);

    if (err) {
      res.send(500).json({ error: err }).end();
      return;
    }

    if (result.length) {
      // user exists in db
      res.status(400).json({ error: 'This email is alredy used.' }).end();
    } else {
      // user does not exist in db
      // form up user data for new user
      var salt = randomJs.integer(100, 999);
      var password = md5(req.body.password + salt);
      var activateCode = md5(salt + password + Date.now());
      
      var userData = {
        email: req.body.email,
        salt: salt,
        password: password,
        activateCode: activateCode
      };
      // create new user
      UserService.createUser(userData, (err) => {
        if (err) {
          res.status(500).json({ error: err }).end();
        } else {
          let msgOpts = {
            to: req.body.email,
            msg: 'confirm-email',
            data: {
              activateCode: activateCode
            },
            html: '<div>HELLO</div>'
          };
          mailer.sendLetter(msgOpts);
          res.status(201).end();
        }
      });
    }
  });

}


function activateUser(req, res){

  console.log('REQUEST-2:', req.params);

  UserService.getUser({ activateCode: req.body.activateCode }, (err, result) => {
    console.log('getUser:', result, result.length);
    if (err) {
      console.log('>1');
      res.status(500).json({ error: err }).end();
      return;
    }
    if (!result.length) {
      console.log('>2');
      res.status(400).json({ error: 'Wrong activate code.' }).end();
    } else {
      console.log('>3');
      // update user -> activated=true
      UserService.updateUser({ activateCode: req.body.activateCode }, { activated: true }, (err) => {
        if (err) {
          console.log('>4');
          res.status(500).json({ error: err }).end();
          return;
        }
        res.status(200).end();
      });
    }

  });
}


function loginUser(req, res) {

  UserService.getUser({ email: req.body.email }, (err, result) => {

    // return error, if there no such user in db
    if (!result.length) {
      res.status(400).json({ error: 'User is not registered.' }).end();
      return;
    }

    // return error, if user is not activated
    if (!result[0].activated) {
      res.status(400).json({ error: 'User is registered, but not yet activated.' }).end();
      return;
    }

    let hashedPassword = md5(req.body.password + result[0].salt);
    if (hashedPassword === result[0].password) {
      // password is correct

      var token = jwt.sign({ expiresInMinutes: 1440, password: result[0].password }, privateKey);


      // switched to jst module:
      // let token = md5(hashedPassword + Date.now());
      // let tokenExpireDatetime = Date.now() + 1000 * 3600 * 24; // 24hrs

      UserService.updateUser({ email: req.body.email }, { token: token }, (err) => {
        // send user data
        result[0].token = token;
        let resUser = Serializer.user(result[0]);
        res.status(200).send(resUser).end();
      });



    } else {
      // password is incorrect
      res.status(400).json({ error: 'Wrong password.' }).end();
    }

  });

}


module.exports = {

  // register
  registerUser: registerUser,

  // activate/:confirmString
  activateUser: activateUser,
  
  loginUser: loginUser

};






