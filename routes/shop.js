const path = require('path');

// what users see is defined here
const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

router.get("/take-to-add-product", (req, res, next) => {
  res.redirect("/admin/add-product");
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
