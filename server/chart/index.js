var express = require('express');
var options = {
	host: 'api.chartbeat.com',
	path: '/live/toppages/v3/?apikey=317a25eccba186e0f6b558f45214c0e7&host=gizmodo.com'
};

var chart = {};

var router = express.Router();

router.get('/', function(req, res) {
	http.request(options, function(response) {
		var str = '';
		response.on('data', function(chunk) {
			str += chunk;
		});

		response.on('end', function() {
			chart = JSON.parse(str);
			res.send(chart);

		});
	}).end();
	// res.render('exercise', {chart: chart});
});

module.exports = router;