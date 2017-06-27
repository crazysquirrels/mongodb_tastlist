var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html');
    
});

router.get('/main', function(req, res, next){
    res.render('main');
    
});

router.get('/adapter', function(req, res, next){
    res.render('adapter.js');
    
});

module.exports = router;