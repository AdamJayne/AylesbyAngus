var app = angular.module('angusApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: "views/home.html"
        }).otherwise({
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })
        .when('/herd', {
            templateUrl:"views/herd.html",
            controller: "HerdController",
            controllerAs: "herdController"
        })
        .when('/about', {
            templateUrl: "views/about.html",
            controller: "AboutController"
        }).otherwise({
            redirectTo: '/home'
        });
    $locationProvider.html5Mode(true);
});