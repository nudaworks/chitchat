let UsersModel = require('../models/users');

class UserService {
  static getUser(queryOpts, callback) {
    UsersModel.find(queryOpts, callback); // err, result params passed to CB
  }
  static createUser(userData, callback) {
    UsersModel.create(userData, callback); // err param passed to CB
  }
  static updateUser(queryData, updateData, callback) {
    UsersModel.update(queryData, updateData, callback); // err param passed to CB
  }
  static getUsers(queryOpts, callback) {

  }
  static deleteUser(queryOpts, callback){

  }
}

module.exports = UserService;
