var express = require('express');
var router = express.Router();
//var app = express();

router.get('/', (req, res)=>{
	//res.send("This is test root end-point");
	res.render('test', {title: "Test"});
});

router.get('/test', (req, res)=>{
	res.send("This is test end-point.");
});

router.get('/testing', (req, res)=>{
	res.send("This is testing end-point.");
});

module.exports = router;


