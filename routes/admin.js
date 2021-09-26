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
  products.push(req.body);
  //console.log(products);
  res.redirect('/');
});

router.get("/del-product", (req, res, next) => {
  res.render('del-product', {
    titlePage: 'Delete products',
    path: 'admin/del-product',
    products: products
  });
});

router.post("/del-product", (req, res, next) => {
  console.log('fetch product', req.body);
  const productToDelete = req.body.product;
  const productIndex = products.findIndex(item => item.productName === productToDelete);
  console.log("index", productIndex);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
  }
  //console.log(products);
  res.redirect('/');
});


exports.routes = router;
exports.products = products;