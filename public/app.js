angular.module('Headlines', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/world', {
        templateUrl: 'views/page.html',
        controller: 'WorldCtrl'
      })
      .when('/us', {
        templateUrl: 'views/page.html',
        controller: 'UsCtrl'
      })
      .when('/science', {
        templateUrl: 'views/page.html',
        controller: 'ScienceCtrl'
      })
      .when('/business', {
        templateUrl: 'views/page.html',
        controller: 'BusinessCtrl'
      })
      .when('/sports', {
        templateUrl: 'views/page.html',
        controller: 'SportsCtrl'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl'
      })
      .otherwise({
        redirectTo: '/',
        controller: 'MainCtrl'
      });
  }]);