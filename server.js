var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

var loginRouter = require('./auth/login');
var ajayRouter = require('./ajay');
var productsRouter = require('./users/products');
var schoolsRouter = require('./users/schools');
var dbRouter = require('./users/database');
var jsonRouter = require('./users/json');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', loginRouter);
app.use('/prds', productsRouter);
app.use('/schools', schoolsRouter);
app.use('/ajay', ajayRouter);
app.use('/db', dbRouter);
app.use('/json', jsonRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
});

const port = 3000;
app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});