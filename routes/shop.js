const path = require('path');

// what users see is defined here
const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');
const { title } = require('process');

router.get("/take-to-add-product", (req, res, next) => {
  res.redirect("/admin/add-product");
});

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    pageTitle : 'Shop',
    prods : products,
    hasProducts : products.length > 0,
    shopCSS : true,
    path : '/',
    isShopActive : true
  });
});

module.exports = router;
