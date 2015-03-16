var express = require('express'),
	bodyParser = require('body-parser');
	http = require('http'),
	swig = require('swig'),
	path = require('path');

var app = express();
var router = express.Router();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('appPath', 'client');

app.use('/chart', require('./chart/index'));

app.route('/*')
    .get(function(req, res) {
      res.sendFile('index.html', {root: path.join(__dirname, '../client') });
    });

var server = app.listen(3000, function() {
	console.log('server listening');
});
