angular.module('Headlines')
  .controller('PoliticsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

$scope.articles = [];

$scope.pageHead = "U.S. News";

$scope.apiLink = 'http://api.feedzilla.com/v1/categories/7/articles.json'

function News(num) {
	this.num = num;
	this.title;
	this.summary;
	this.source;
	this.sourceUrl;
	this.fillData(num);
}
News.prototype = {
	fillData: function(num) {
	$.getJSON($scope.apiLink, function(data){

					this.title = data.articles[num].title,
					this.summary = data.articles[num].summary,
					this.source = data.articles[num].source,
					this.sourceUrl = data.articles[num].source_url,

	$scope.articles.push(this);
	
	}).then(function() {
		$scope.$apply(function () {
            $scope.articles;
        });
	})
}

};



$scope.art1 = new News(0);
$scope.art2 = new News(1);
$scope.art3 = new News(2);
$scope.art4 = new News(3);
$scope.art5 = new News(4);
$scope.art6 = new News(5);
$scope.art7 = new News(6);
$scope.art8 = new News(7);
$scope.art9 = new News(8);
$scope.art10 = new News(9);

}]);


