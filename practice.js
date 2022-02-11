var express = require('express');
var path = require('path');
const app = express();


//const userRoutes = require('./routes/practice');
// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, './public')));

//app.use('/', userRoutes);

app.get('/', (req, res, next) => {
	res.render('index', {'title':'Home'});	
});
app.get('/services', (req, res, next) => {
	res.render('services', {'title':'Services'});	
});
app.get('/contact', (req, res, next) => {
	res.render('contact', {'title':'Contact'});	
});


const port = 4000;
app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});