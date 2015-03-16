angular.module('minibeat')
	.factory('Chart', function($http, $q){
		var chart = {}
		if(typeof chart === 'null') {
			$http.get('/chart').success(function(data) {
				chart = data;
			});
		}
		return {
			getChart: function() {
				var def = $q.defer();
				$http.get('/chart').success(function(data) {
					def.resolve(data);
				});
				return def.promise;
			},
			setChart: function(data) {
				chart = data;
			}
	};
	});