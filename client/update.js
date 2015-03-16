angular.module('minibeat', ['ui.router'])
	.controller('MiniBeatCtrl', function($scope, $http) {
		var worker = new Worker('worker.js');
				worker.postMessage('');	
				worker.addEventListener('message', function(e) {
		     		console.log(e.data);
				}, false);
		$http.get('/chart').success(function(data) {
			console.log(data);
			$scope.chart = data;
		});
	});
