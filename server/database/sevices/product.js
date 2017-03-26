let ProductsModel = require('../models/products');
// let Serialize = require('../database/serialize');

const ProductService = {

  getProduct(query, callback) {
    ProductsModel.find(query, callback);
  },

  getProducts(filter, callback) {
    ProductsModel.find(filter, callback);
  },

  createProduct(data, callback) {
    ProductsModel.create(data, callback); 
  },

  updateProduct(id, data, options, callback) {
    options = options === _.isObject(options) ? options : {};
    options.new = options.new === undefined ? true : options.new;
    ProductsModel.findByIdAndUpdate(id, data, options, callback);
  },

  deleteProduct(query, callback){
    var delQuery = ProductsModel.find(query, (err, result) => {
      delQuery.remove(() => {
        callback(err, result);
      });
    });
  }

};

module.exports = ProductService;
