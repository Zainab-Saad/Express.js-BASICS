const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      pageTitle: "Add Product",
      productCSS: true,
      path: "/admin/add-product",
      isAddProductActive: true,
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const product = new Product(title, description, imageUrl, price);
    product.save();
    res.redirect("/");
  };
  
  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render("admin/products", {
        pageTitle: "Admin Products",
        prods: products,
        hasProducts: products.length > 0,
        shopCSS: true,
        path: "/admin/products",
        isShopActive: true,
      });
    });
  };