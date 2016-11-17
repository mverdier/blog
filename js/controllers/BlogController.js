app.controller('BlogController', ['$scope', '$http', '$location', function($scope, $http, $location) {

	console.log($location.path());

	var path = $location.path();

	$scope.getArticle = function(url) {
		//GET request for a specific article
		$scope.selectedArticle = {
			"pictureHeader": "sample-1.jpg",
			"url": "article-url",
			"title": "Test article",
			"preview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"content": "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <a href='#'>accusantium</a> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><p>Proin pretium nec nibh venenatis euismod. Donec sed lorem nec ligula vulputate mattis non eget lacus. Sed eu interdum elit. Suspendisse turpis erat, posuere eget imperdiet eget, tempus ut eros. Fusce mattis purus eget interdum tristique. Phasellus rhoncus aliquet ante eget ultricies. Nullam felis dui, elementum ac tincidunt at, blandit eu mauris. Cras tortor augue, lobortis non mattis ullamcorper, bibendum in elit. Etiam id nunc at sapien facilisis venenatis quis id mauris. Nunc consectetur efficitur urna. Cras eleifend fringilla mattis. Vivamus vitae viverra odio, quis convallis urna. Ut vulputate odio nec erat vestibulum, vitae laoreet mi rutrum. Ut eget nulla felis.</p><p>In dolor purus, gravida quis arcu a, ultricies tristique quam. Aenean feugiat commodo tortor, non varius justo tempus in. Nunc ut accumsan libero. Duis a nibh ut metus tincidunt sodales. Pellentesque feugiat nisi et nibh ultrices, at euismod velit faucibus. Nulla scelerisque iaculis tortor sed hendrerit. Phasellus porta, quam eu dapibus tristique, magna mauris lacinia neque, et rutrum ligula eros id felis. In vel magna justo.</p><img src='http://resources.martin-verdier.com/articles/images/sample-1.jpg'><p>Donec scelerisque dolor sed purus bibendum, sit amet commodo nisi fringilla. Sed maximus enim odio, in vulputate eros posuere ac. Morbi ultrices auctor metus non eleifend. Phasellus at ultrices massa. Maecenas ipsum nisi, lobortis quis odio in, euismod iaculis ex. Fusce nunc massa, auctor vel sodales id, semper ut ligula. Proin nec faucibus risus, non malesuada eros. Morbi euismod aliquam metus, ut tincidunt ligula congue quis. Vivamus elementum gravida lacinia. Nullam vehicula ac nulla et ornare. In hac habitasse platea dictumst. Quisque vitae eleifend felis, ut laoreet nisl. In nunc mauris, sagittis at egestas quis, porttitor ac magna.</p>",
			"author": "Martin",
			"publicationDate": Date()
		};

		//WHILE LOADING Display a loading animation at the top

		//WHEN LOADED Switch to the article element
		$location.path($scope.selectedArticle.url);
		document.getElementById('list-page').style.display = "none";
		document.getElementById('article-page').style.display = "block";
		document.getElementById('breadcrumbs').style.display = "block";
	};

	if (path != "" && path != "/") {
		$scope.getArticle(path.substring(1));
	}

	$scope.page = 1;

	$scope.articles = [{
		"pictureHeader": "sample-1.jpg",
		"url": "article-url",
		"title": "Test article",
		"preview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		"author": "Martin",
		"publicationDate": Date()
	},

	{
		"pictureHeader": "sample-1.jpg",
		"url": "article-url",
		"title": "Test article",
		"preview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		"author": "Martin",
		"publicationDate": Date()
	}];

	$scope.comments = function(url) {
		getArticle(url);
		//Scroll down to the comments
	};

	$scope.back = function() {
		$location.path("");
		document.getElementById('list-page').style.display = "block";
		document.getElementById('article-page').style.display = "none";
		document.getElementById('breadcrumbs').style.display = "none";
	};

	//Overriding the backspace key to use the back() method instead
	//The joys of a single-page application
	//Props to user erikkallen on StackOverflow! http://stackoverflow.com/a/2768256
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
			}
		}
	});
}]);