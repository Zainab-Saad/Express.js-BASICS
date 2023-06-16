const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    productCSS: true,
    path: "/admin/add-product",
    isAddProductActive: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.product);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop", {
      pageTitle: "Shop",
      prods: products,
      hasProducts: products.length > 0,
      shopCSS: true,
      path: "/",
      isShopActive: true,
    });
  });
};

exports.takeToAddProduct = (req, res, next) => {
  res.redirect("/admin/add-product");
};
