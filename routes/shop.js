// what users see is defined here
const express = require("express");

const router = express.Router();


router.get("/take-to-add-product", (req, res, next) => {
  res.redirect("/admin/add-product");
});

router.get("/", (req, res, next) => {
  res.send(`<html>
      <body>
          <h1>Shopping Cart!</h1>
          <form action="/take-to-add-product">
              <button type="submit">
                  Take me to Add product page!!
              </button>
          </form>
      </body>
    </html>`);
});

module.exports = router;
