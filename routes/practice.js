const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('index', {title:"Index"});
});

/* Login. */
router.get('/contact', function(req, res) { 
  res.render('contact', {title: 'Contact'});
});

/* cart */
router.get('/json', function(req, res) {
  res.json({"message" : "Hi, I am ajay Sisaudiya"});
});

 module.exports = router;