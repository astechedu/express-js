var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/*
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'laravel6'    
});

connection.connect();
var data = {};
connection.query('SELECT * from users', function (err, rows, fields) {
    if (err) throw err  
    for (const i in rows) {  
        data = rows[i];        
      }     
  });
  
  connection.end();
*/


router.get('/', (req, res, next)=>{ 

  var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'laravel6'    
});
con.connect();
var data = {};
con.query('SELECT * from users', function (err, rows, fields) {

    if (err) throw err        
      
      res.render('datalist', {data: rows, title:"Express Js"});
  });   
    con.end();
});

module.exports = router;