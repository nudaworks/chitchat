'use strict';

let ProductService = require('../database/sevices/product');
let Serialize = require('../database/serialize');


let StoreCtrl = {};


StoreCtrl.getProduct = (req, res) => {
  /*
   toDO: add check if collection exists, otherwise we get an error:
   {
   "error": {
   "message": "Cast to ObjectId failed for value \"3\" at path \"_id\" for model \"Product\"",
   "name": "CastError",
   "stringValue": "\"3\"",
   "kind": "ObjectId",
   "value": "3",
   "path": "_id"
   }
   }
   */
  ProductService.getProduct({ _id: req.params.productId }, (err, result) => {

    // if (err) {
    //   res.status(500).json({ error: err }).end();
    //   return;
    // }

    if (err) {
      res.status(404).json({ error: 'Product not found.' }).end();
      return;
    }

    res.status(200).send(Serialize.product(result[0])).end();
  });
};


StoreCtrl.getProducts = (req, res) => {
console.log('!!!!')
  ProductService.getProducts({}, (err, result) => {

    if (err) {
      res.status(500).json({ error: err }).end();
      return;
    }
    
    res.status(200).send(Serialize.product(result)).end();
  });
};


StoreCtrl.createProduct = (req, res) => {

  let productData = Serialize.product.saveFilter(req.body);
  ProductService.createProduct(productData, (err, result) => {

    if (err) {
      res.status(500).json({ error: err }).end();
      return;
    }

    res.status(201).json(Serialize.product(result)).end();

  });

};


StoreCtrl.deleteProduct = (req, res) => {

  ProductService.deleteProduct({ _id: req.params.productId }, (err, result) => {
    // if (err) {
    //   res.status(500).json({ error: err }).end();
    //   return;
    // }

    if (err) {
      // toDO: can't differentiate what the error is, so I reckon that on this stage product not found. find out how to solve it.

      res.status(404).json({ error: 'Product not found'}).end();
      return;
    }

    res.sendStatus(200);
  });

};


StoreCtrl.updateProduct = (req, res) => {

  let productData = Serialize.product.saveFilter(req.body);
  ProductService.updateProduct({ _id: req.params.productId }, productData, {}, (err, result, c, d) => {

    console.log('TRY:', err, result, c, d);
    if (err) {
      res.status(500).json({ error: err }).end();
      return;
    }

    res.status(201).json(Serialize.product(result)).end();

  });

};


module.exports = StoreCtrl;





