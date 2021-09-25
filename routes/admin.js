const path = require('path');

const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render('add-product', {
    titlePage: 'Add products',
    path: 'admin/add-product'
  });
}); 

router.post("/add-product", (req, res, next) => {
  //console.log(req.body);
  products.push({ product: req.body.newProduct });
  //console.log(products);
  res.redirect('/');
});


exports.routes = router;
exports.products = products;