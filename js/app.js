var app = angular.module("myApp", ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.
		when('/admin', {
			templateUrl: 'admin.html',
			controller: 'AdminController'
		}).
		otherwise({
			templateUrl: 'home.html',
			controller: 'BlogController'
		});

	$locationProvider.html5Mode(true);
}]);