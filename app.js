const http = require("http");
const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express(); // initialize an express app

// --- defining middlewares, receiving, parsing requests and redirecting responses
// parse the req body
app.use(bodyParser.urlencoded({extended : false}));


// add static middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes); // router is a valid middleware
app.use(shopRoutes);

// send 404 error page - catch all route
app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

const server = http.createServer(app); // create a server and give a valid request handler (app in this case)
app.listen(3000);
