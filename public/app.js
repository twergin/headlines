angular.module('Headlines', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/world', {
        templateUrl: 'views/world.html',
        controller: 'WorldCtrl'
      })
      .when('/politics', {
        templateUrl: 'views/politics.html',
        controller: 'PoliticsCtrl'
      })
      .when('/science', {
        templateUrl: 'views/science.html',
        controller: 'ScienceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);