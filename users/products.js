var express = require('express');

var router = express.Router();

router.get('/products', (req, res)=>{
	res.send("This is productcs.");
});

router.get('/products/pots', (req, res)=>{
	res.send("This is pots.");
});

router.get('/products/sarees', (req, res)=>{
	res.send("This is sarees.");
});

module.exports = router;

