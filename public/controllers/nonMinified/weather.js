angular.module('Headlines')
  .controller('WeatherCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

$scope.pageHead = "Weather";

function getter() {

	$.ajax({
            type: 'GET',
            url: "http://api.wunderground.com/api/23e04c65ba5e3588/conditions/q/55401.json",
            dataType: "jsonp", 
            context: this,

            success: function(data,status){

            	$scope.sky = data.current_observation.weather;
            	$scope.temp = data.current_observation.temperature_string;
            	$scope.location = data.current_observation.display_location.full;
            	$scope.time = data.current_observation.observation_time;
            	$scope.precip = data.current_observation.precip_today_string;
            	$scope.wind = data.current_observation.wind_string;
            	$scope.picAlt = data.current_observation.icon;
            	$scope.picUrl = data.current_observation.icon_url;
            	$scope.forecastUrl = data.current_observation.forecast_url;
            	$scope.attr = data.current_observation.image;

            	$scope.$apply(function () {
            		$scope.sky;
        		});

            }
        });
	
};

getter();

}]);


