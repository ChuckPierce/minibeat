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
		

		Chart.getChart().then(function(data) {
			$scope.chart = data;
			// console.log($scope.chart);
		});

		var worker = new Worker('worker.js');
		worker.postMessage();	
		worker.addEventListener('message', function(e) {
		     // console.log(e.data);
		     $scope.chart = JSON.parse(e.data);
		     $scope.$apply();
		}, false);
		// setInterval(function(){
		// 	Chart.getChart().then(function(data) {
		// 		$scope.chart = data;
		// 	})
		// }, 1000);
	})
	.controller('MiniBeatDetailCtrl', function($scope, $stateParams, Chart) {
		$scope.currPage = $scope.chart.pages[$stateParams.index-1];

		var worker = new Worker('worker.js');
		worker.postMessage();
		worker.addEventListener('message', function(e) {
		     // console.log(e.data);
		     var chart = JSON.parse(e.data);
		     $scope.currPage = chart.pages[$stateParams.index-1];
		     $scope.$apply();
		}, false);
		// setInterval(function(){
		// 	Chart.getChart().then(function(data) {
		// 		var chart = data;
		// 		$scope.currPage = chart.pages[$stateParams.index-1];
		// 	})
		// }, 1000);
	});
