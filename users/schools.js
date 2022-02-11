var express = require('express');

var router = express.Router();
var app = express();

router.get('/', (req, res)=>{
	res.send("This is school.");
});

router.get('/staff', (req, res)=>{
	res.send("This is school staff.");
});

router.get('/students', (req, res)=>{
	res.send("This is schools students.");
});

module.exports = router;

