const path = require('path');
// handle creation of products
const express = require("express");

const rootDir = require('../util/path');

const router = express.Router(); //pluggable express app into other apps

// match /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// match /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
