const http = require("http");
const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorsController = require('./controllers/errors');
const app = express(); // initialize an express app

app.set('view engine', 'ejs');
app.set('views', 'views');


// --- defining middlewares, receiving, parsing requests and redirecting responses
// parse the req body
app.use(bodyParser.urlencoded({extended : false}));


// add static middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes); // router is a valid middleware
app.use(shopRoutes);

// send 404 error page - catch all route
app.use('/', errorsController.get404);

const server = http.createServer(app); // create a server and give a valid request handler (app in this case)
app.listen(3000);
