const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  res.render('shop', {
    titlePage: 'Shop page',
    products: products,
    path: '/'
  });
});

module.exports = router;