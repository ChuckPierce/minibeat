var express = require('express'),
	bodyParser = require('body-parser');
	http = require('http'),
	swig = require('swig'),
	path = require('path'),
	chart = {};

var app = express();
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// app.use(express.static(__dirname + '/', {index: 'exercise.html'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var options = {
	host: 'api.chartbeat.com',
	path: '/live/toppages/v3/?apikey=317a25eccba186e0f6b558f45214c0e7&host=gizmodo.com'
};

http.request(options, function(response) {
	var str = '';
	response.on('data', function(chunk) {
		str += chunk;
	});

	response.on('end', function() {
		chart = JSON.parse(str);
		app.get('/', function(req, res) {
			console.log('in here');
			res.render('exercise', {chart: chart.pages});
		});
	});
}).end();

var server = app.listen(3000, function() {
	console.log('server listening');
});
