var express = require('express');

var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cakephp"
  });

  con.connect(function(err) {
    if (err) throw err;
      console.log('Connected');   
  });  
  
/* GET home page. */
router.get('/', function(req, res, next) {
    var query = "select *from users";
    con.query(query, function(err, rows, fields){
        if(err) throw err;
        res.render('products', { title : 'Database', data : rows });
        //res.json(rows);
    });    
});


module.exports = router;