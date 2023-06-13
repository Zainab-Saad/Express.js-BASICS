const http = require("http");

const express = require("express");
const bodyParser = require('body-parser');

const app = express(); // initialize an express app

// --- defining middlewares, receiving, parsing requests and redirecting responses
// parse the req body
app.use(bodyParser.urlencoded({extended : false}));

app.use("/take-to-add-product", (req, res, next) => {
  res.redirect("/add-product");
});

app.use("/add-product", (req, res, next) => {
  res.send(`<html>
        <body>
            <h1>Add a product here!!</h1>
            <form action="/product" method="POST">
                <input type="text" name="product">
                    <button type="submit">
                        Add product
                    </button>
                </input>
            </form>
        </body>
    </html>`);
});
// filter for incoming post request
app.post("/product", (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  res.redirect('/')
});

app.use("/", (req, res, next) => {
  res.send(`<html>
    <body>
        <h1>Hello to my shopping cart!!!</h1>
        <form action="/take-to-add-product">
            <button type="submit">
                Take me to Add product page!!
            </button>
        </form>
    </body>
  </html>`);
});

const server = http.createServer(app); // create a server and give a valid request handler (app in this case)

app.listen(3000);
