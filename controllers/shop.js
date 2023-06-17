const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      pageTitle: "All Products",
      prods: products,
      hasProducts: products.length > 0,
      shopCSS: true,
      path: "/products",
      isShopActive: true,
    });
  });
};

exports.takeToAddProduct = (req, res, next) => {
  res.redirect("/admin/add-product");
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      pageTitle: "Shop",
      prods: products,
      hasProducts: products.length > 0,
      shopCSS: true,
      path: "/",
      isShopActive: true,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path : '/cart',
    pageTitle : 'My Cart'
  })
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path : '/checkout',
    pageTitle : 'Checkout'
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path : '/orders',
    pageTitle : 'Orders'
  })
}