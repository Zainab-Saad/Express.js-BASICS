const path = require('path');

// what users see is defined here
const express = require("express");

const router = express.Router();

const productsController = require('../controllers/products');

router.get("/take-to-add-product", productsController.takeToAddProduct);

router.get("/", productsController.getProducts);

module.exports = router;
