var app = angular.module('app', ['ngRoute', 'ngMessages']);


app.config(function($routeProvider){
$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/add/:id',{
		templateUrl: 'partials/add.html'
	})
	.when('/user/userShow/:id', {
		templateUrl: 'partials/userShow.html'
	})
	.when('/item/show/:id', {
		templateUrl: 'partials/itemShow.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})