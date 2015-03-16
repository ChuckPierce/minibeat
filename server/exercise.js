var express = require('express'),
	bodyParser = require('body-parser');
	http = require('http'),
	swig = require('swig');

var app = express();
var router = express.Router();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/chart', require('./chart/index'));

var server = app.listen(3000, function() {
	console.log('server listening');
});
