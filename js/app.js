var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.
		when('/', {
			templateUrl: 'home.html',
			controller: 'BlogController'
		}).
		/*when('/admin', {
			templateUrl: 'admin.html',
			controller: 'AdminController'
		}).*/
		otherwise({
			templateUrl: 'article.html'
		});

	$locationProvider.html5Mode(true);
}]);