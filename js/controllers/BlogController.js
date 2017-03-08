app.controller('BlogController', ['$scope', '$http', '$location', function($scope, $http, $location) {

	/*
	 * Meta descriptors, currently only supporting Twitter
	 */
	$scope.meta = {
		title: "Blog - Martin Verdier",
		description: "Tech, travels, thoughts. Also a whole bunch of other things.",
		image: ""
	};
	
	/*
	 * Gets an article content for a specified article url
	 */
	$scope.getArticle = function(url) {
		var res = url.split("/");
		
		$http({
			method: 'GET',
			url: 'http://blog.martin-verdier.com/api/article?url=' + res[0]
		}).then(function successCallback(response) {

			if (response.data.length === 0) {
				$location.path("");
			} else {
				$location.path(res[0]);
				$scope.selectedArticle = response.data;
				
				//Displays the correct page
				document.getElementById('article-list').style.display = "none";
				document.getElementById('pagination').style.display = "none";
				document.getElementById('article-page').style.display = "block";
				document.getElementById('breadcrumbs').style.display = "block";

				//Switch to the article element
				$location.path($scope.selectedArticle.url);
				document.title = $scope.selectedArticle.title;
			}

		}, function errorCallback(response) {
			//TODO Display an error message
		});
	};

	/*
	 * Sets up the pagination part
	 */
	$scope.setupPages = function() {
		$http({
			method: 'GET',
			url: 'http://blog.martin-verdier.com/api/pageCount'
		}).then(function successCallback(response) {
			//TODO Display a loading animation at the top

			if (response.data.length === 0) {
				//TODO There were no data to return, displaying an error message
			} else {
				$scope.maxPage = response.data;
			}

			//TODO Hide loading animation

		}, function errorCallback(response) {
			//TODO Display an error message

			//TODO Hide loading animation
		});
	}

	/*
	 * Sets up the latest 7 articles
	 */
	$scope.latest = function() {
		$http({
			method: 'GET',
			url: 'http://blog.martin-verdier.com/api/latest'
		}).then(function successCallback(response) {
			//TODO Display a loading animation at the top

			if (response.data.length === 0) {
				//TODO There were no articles to display, displaying an error message
			} else {
				$scope.latest = response.data;
			}

			//TODO Hide loading animation

		}, function errorCallback(response) {
			//TODO Display an error message

			//TODO Hide loading animation
		});
	}

	/*
	 * Gets a page content for a specified page number
	 */
	$scope.getPage = function(pageNumber) {
		$http({
			method: 'GET',
			url: 'http://blog.martin-verdier.com/api/get' //TODO http://blog.martin-verdier.com/api/page?number=' + pageNumber
		}).then(function successCallback(response) {
			//TODO Display a loading animation at the top

			if (response.data.length === 0) {
				//TODO There were no articles to display, displaying an error message
			} else {
				$scope.articles = response.data;
			}

			//TODO Hide loading animation

		}, function errorCallback(response) {
			//TODO Display an error message

			//TODO Hide loading animation
		});
	}


	/*
	 * Actually opens an article from the list page
	 * What it does besides loading it is updating the url for sharing purposes
	 */
	$scope.openArticle = function(url) {
		//GET request for a specific article
		$scope.getArticle(url);

		//Scrolling up
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	};

	/*
	 * Opens an article towards the comment section
	 */
	$scope.comments = function(url) {
		$scope.openArticle(url);
		//Scroll down to the comments
	};

	/*
	 * Takes the user back to the previous article list page they were on
	 */
	$scope.back = function() {
		$location.path("");
		document.getElementById('article-list').style.display = "block";
		document.getElementById('pagination').style.display = "block";
		document.getElementById('article-page').style.display = "none";
		document.getElementById('breadcrumbs').style.display = "none";
		document.title = "Blog - Martin Verdier";
	};

	/*
	 * Overriding the backspace key to use the back() method instead
	 * The joys of a single-page application
	 * Props to user erikkallen on StackOverflow! http://stackoverflow.com/a/2768256
	 */
	$(document).unbind('keydown').bind('keydown', function (event) {
		if (event.keyCode === 8) {
			var doPrevent = true;
			var types = ["text", "password", "file", "search", "email", "number", "date", "color", "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
			var d = $(event.srcElement || event.target);
			var disabled = d.prop("readonly") || d.prop("disabled");
			if (!disabled) {
				if (d[0].isContentEditable) {
					doPrevent = false;
				} else if (d.is("input")) {
					var type = d.attr("type");
					if (type) {
						type = type.toLowerCase();
					}
					if (types.indexOf(type) > -1) {
						doPrevent = false;
					}
				} else if (d.is("textarea")) {
					doPrevent = false;
				}
			}

			//We prevent it from being used ONLY if an article is open
			if (doPrevent && document.getElementById('article-page').style.display == "block") {
				event.preventDefault();
				$scope.back();
				$location.path("");
			}
		}
	});
	
	var path = $location.path();

	//Setting up pagination and latest articles
	$scope.maxPage = 1;
	$scope.setupPages();
	$scope.latest();

	//Setting the current page at 1 by default
	$scope.page = 1;

	//Checking if the accessed page was the basic one or a custom url
	if (path != "" && path != "/") {

		//TODO Check if the path is just a number and get the matching page at load
		$scope.getArticle(path.substring(1));
	}

	$scope.articles;

	$scope.getPage($scope.page);

}]);
