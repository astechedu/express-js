const express = require('express');
const path = require('path');
const app = express();
const testRouter = require('./routes/test.js');
const userRouter = require('./routes/users.js');


// use PHP as view engine in Express
/*
var phpnode = require('php-node')({bin:"D:\\xampp\\php\\php.exe"});
app.engine('php', phpnode);
app.set('view engine', 'php');

// view engine setup
app.set('views', path.join(__dirname, 'php'));
app.set('view engine', 'php');
*/

app.set('view engine', 'pug')

app.use('/', testRouter);
app.use('/user', userRouter);

const port = 3000;
app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});