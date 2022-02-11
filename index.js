var express = require('express');
var app = express();
var router = express.Router();

var sass = require('node-sass-middleware');
 app.use(
     sass({
         src: __dirname + '/sass/style.scss',    // Input SASS files
         dest: __dirname + '/public/stylesheets/style.css', // Output CSS
         debug: true                
     })
 );

router.get('/', (req, res)=>{
	res.send("This is root.");
});

router.get('/user', (req, res)=>{
	res.send("This is user.");
});

router.get('/post', (req, res)=>{
	res.send("This is post.");
});

module.exports = router;


