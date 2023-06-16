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
  constructor(title) {
    this.title = title;
  }

  save() {
    readProductsFromFile((products) => {
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
