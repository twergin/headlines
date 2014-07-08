angular.module('Headlines', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/news', {
        templateUrl: '/news/views/home.html',
        controller: 'MainCtrl'
      })
      .when('/news/world', {
        templateUrl: '/news/views/page.html',
        controller: 'WorldCtrl'
      })
      .when('/news/us', {
        templateUrl: '/news/views/page.html',
        controller: 'UsCtrl'
      })
      .when('/news/science', {
        templateUrl: '/news/views/page.html',
        controller: 'ScienceCtrl'
      })
      .when('/news/business', {
        templateUrl: '/news/views/page.html',
        controller: 'BusinessCtrl'
      })
      .when('/news/sports', {
        templateUrl: '/news/views/page.html',
        controller: 'SportsCtrl'
      })
      .otherwise({
        redirectTo: '/news',
        controller: 'MainCtrl'
      });
  }]);