'use strict';

let User = require('../database/models/users');


function createUser(req, res){
  User.create({
    firstName: 'Peter'
  }, err => {

    if (err) res.send(err);
    res.json('User created');

  });
}

function getUserList(req, res){
  User.find({}, (err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
}

function getUser(opts) {
}

function updateuser(req, res){

}

function deleteUser(req, res){

}

module.exports = {

  // users
  createUser: createUser,
  getUserList: getUserList,

  // users:/userId
  getUser: getUser,
  updateUser: updateuser,
  deleteUser: deleteUser

};
