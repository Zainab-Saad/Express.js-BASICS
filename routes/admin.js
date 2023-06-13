// handle creation of products
const express = require("express");

const router = express.Router(); //pluggable express app into other apps

// match /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(`<html>
          <body>
              <h1>Add a product here!!</h1>
              <form action="/admin/add-product" method="POST">
                  <input type="text" name="product">
                      <button type="submit">
                          Add product
                      </button>
                  </input>
              </form>
          </body>
      </html>`);
});

// match /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
