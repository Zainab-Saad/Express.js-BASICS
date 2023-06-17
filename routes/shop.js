const path = require('path');

// what users see is defined here
const express = require("express");

const router = express.Router();

const shopController = require('../controllers/shop');

router.get("/take-to-add-product", shopController.takeToAddProduct);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);

router.get("/", shopController.getIndex);

module.exports = router;
