angular.module('Headlines')
  .controller('MainCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

// world news - "http://api.feedzilla.com/v1/categories/19/articles.json";
// US - "http://api.feedzilla.com/v1/categories/3/articles.json"
// science - "http://api.feedzilla.com/v1/categories/8/articles.json"
//tech - "http://api.feedzilla.com/v1/categories/30/articles.json"
//sports - "http://api.feedzilla.com/v1/categories/27/articles.json"

$scope.newsArray = ['19', '3', '8', '30', '27'];
$scope.linkArray = [];
$scope.newsArrayLength = $scope.newsArray.length;

$scope.linkBuilder = function() {for (var i = 0; i < $scope.newsArrayLength; i++) {
	$scope.link = $scope.newsArray[i];
    $scope.linkArray.push('http://api.feedzilla.com/v1/categories/' + $scope.link + '/articles.json');
    }
    
}

$scope.linkBuilder();

$scope.linkArray.forEach(function(item, index, array) {
   

$.getJSON(item, function(data){
	$scope.cat = data.description.replace(/ News/g, '');
	$scope.title = data.articles[0].title;
	$scope.summary = data.articles[0].summary;
	$scope.source = data.articles[0].source;
	$scope.sourceLink = data.articles[0].source_url;

$('.section-title.' + $scope.cat).text($scope.cat);
$('.article-text.' + $scope.cat).text($scope.summary);
$('.article-title.' + $scope.cat).text($scope.title);
$('.article-source.' + $scope.cat).text($scope.source);
$('.article-source.' + $scope.cat).prop('href', $scope.sourceLink);

	});
});

}]);


