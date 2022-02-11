var express = require('express');
var router = express.Router();
var app = express();

var arr = ['ajay','bhanu'];
router.get('/', (req, res)=>{
    res.json(arr);
});


module.exports = router;