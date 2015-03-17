angular.module('minibeat', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/pages.html',
			controller: 'MiniBeatCtrl'
		})
		.state('home.detail', {
			url: 'detail/:index',
			templateUrl: 'views/detail.html',
			controller: 'MiniBeatDetailCtrl'
		});
		
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	})
	.controller('MiniBeatCtrl', function($scope, $http, Chart) {
		

		Chart.getChart().then(function(data) {
			$scope.chart = data;
		});

		var worker = new Worker('worker.js');
		worker.postMessage();	
		worker.addEventListener('message', function(e) {
		     $scope.chart = JSON.parse(e.data);
		     $scope.$apply();
		}, false);
	})
	.controller('MiniBeatDetailCtrl', function($scope, $stateParams, Chart) {
		if(!$scope.chart)  {
			Chart.getChart().then(function(data) { 
			$scope.chart = data;
			$scope.currPage = $scope.chart.pages[$stateParams.index-1];
			});
		} else {
			$scope.currPage = $scope.chart.pages[$stateParams.index-1];
		}

		var worker = new Worker('worker.js');
		worker.postMessage();
		worker.addEventListener('message', function(e) {
		     var chart = JSON.parse(e.data);
		     $scope.currPage = chart.pages[$stateParams.index-1];
		     $scope.$apply();
		}, false);
	});
