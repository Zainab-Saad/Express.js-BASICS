const fs = require("fs");
const path = require("path");
const osPath = require("../util/path");

const p = path.join(osPath, "data", "products.json");
const readProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      return callback(JSON.parse(fileContent));
    }
    callback([]);
  });
};

module.exports = class Product {
  constructor(title, description, imageUrl, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  save() {
    readProductsFromFile((products) => {
      console.log(this);
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    readProductsFromFile(callback);
  }
};
