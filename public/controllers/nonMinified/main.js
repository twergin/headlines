angular.module('Headlines')
  .controller('MainCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

// world news - "http://api.feedzilla.com/v1/categories/19/articles.json";
// US - "http://api.feedzilla.com/v1/categories/3/articles.json"
// science - "http://api.feedzilla.com/v1/categories/8/articles.json"
//tech - "http://api.feedzilla.com/v1/categories/30/articles.json"
//sports - "http://api.feedzilla.com/v1/categories/27/articles.json"

$scope.articles = [];

function News(apiLink) {
	this.apiLink = apiLink;
	this.description;
	this.date;
	this.title;
	this.summary;
	this.source;
	this.sourceUrl;
	this.fillData();
}

News.prototype = {
	constructor: News,
	fillData: function() {
	$.getJSON(this.apiLink, function(data){

					this.description = data.description.replace(/ News/g, ''),
					this.title = data.articles[0].title,
					this.summary = data.articles[0].summary,
					this.source = data.articles[0].source,
					this.sourceUrl = data.articles[0].source_url,
					this.date = data.articles[0].publish_date,

	$scope.articles.push(this);
	
	}).then(function() {
		$scope.$apply(function () {
            $scope.articles;
        });
	})
}

};


$scope.worldNews = new News('http://api.feedzilla.com/v1/categories/19/articles.json');
$scope.usNews = new News('http://api.feedzilla.com/v1/categories/7/articles.json');
$scope.scienceNews = new News('http://api.feedzilla.com/v1/categories/8/articles.json');
$scope.BusinessNews = new News('http://api.feedzilla.com/v1/categories/22/articles.json');
$scope.sportsNews = new News('http://api.feedzilla.com/v1/categories/27/articles.json');


}]);


