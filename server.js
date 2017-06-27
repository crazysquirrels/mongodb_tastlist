var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var url =require('url'); 
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var main = require('./views/js/main');
var adapter = require('./views/js/lib/adapter');
var port = 3001;
var app = express();

//view engine

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api', tasks);
app.use('/main', main);
app.use('/adapter',adapter);

app.listen(port, function(){
    
   console.log("app running in 3001"); 
});