(function(){
	angular.module('agrostar-app')
	.config(['$routeProvider', function($routeProvider){
	$routeProvider
    .when("/", {
        templateUrl : "partials/home_page.html"
    })
}])
}());