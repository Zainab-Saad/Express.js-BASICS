const path = require('path');
// handle creation of products
const express = require("express");

const router = express.Router(); //pluggable express app into other apps

const adminController = require('../controllers/admin');


// match /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// match /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);


router.get('/products', adminController.getProducts);
module.exports = router;
