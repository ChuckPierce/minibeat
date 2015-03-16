angular.module('minibeat', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/pages.html',
			controller: 'MiniBeatCtrl'
		})
		.state('home.detail', {
			url: ':index',
			templateUrl: 'views/detail.html',
			controller: 'MiniBeatDetailCtrl'
		});
		
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	})
	.controller('MiniBeatCtrl', function($scope, $http, Chart) {
		var worker = new Worker('worker.js');
				worker.postMessage('');	
				worker.addEventListener('message', function(e) {
		     		console.log(e.data);
				}, false);
		Chart.getChart().then(function(data) {
			$scope.chart = data;
			console.log($scope.chart);
		});
	})
	.controller('MiniBeatDetailCtrl', function($scope, $stateParams) {
		$scope.currPage = $scope.chart.pages[$stateParams.index-1];
	});
