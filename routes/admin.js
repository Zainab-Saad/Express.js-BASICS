const path = require('path');
// handle creation of products
const express = require("express");

const rootDir = require('../util/path');

const router = express.Router(); //pluggable express app into other apps

const products = [];


// match /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render('add-product', {
    pageTitle : 'Add Product',
    productCSS : true,
    path : '/admin/add-product',
    isAddProductActive : true
  });
});

// match /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push(req.body.product);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
