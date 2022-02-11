var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Login. */
router.get('/login', function(req, res, next) { 
  res.send('This is login page.');
});

/* cart */
router.get('/json', function(req, res, next) {
  res.json({"message" : "Hi, I am ajay Sisaudiya"});
});
module.exports = router;
