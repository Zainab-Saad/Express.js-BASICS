const path = require('path');
// handle creation of products
const express = require("express");

const router = express.Router(); //pluggable express app into other apps

const productsController = require('../controllers/products');


// match /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// match /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
