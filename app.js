const http = require("http");
const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express(); // initialize an express app

app.set('view engine', 'ejs');
app.set('views', 'views');


// --- defining middlewares, receiving, parsing requests and redirecting responses
// parse the req body
app.use(bodyParser.urlencoded({extended : false}));


// add static middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes); // router is a valid middleware
app.use(shopRoutes);

// send 404 error page - catch all route
app.use('/', (req, res, next) => {
  res.status(404).render('404', {
    pageTitle : 'Page Not Found'
  });
})

const server = http.createServer(app); // create a server and give a valid request handler (app in this case)
app.listen(3000);
