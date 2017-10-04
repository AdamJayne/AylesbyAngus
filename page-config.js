var app = angular.module('angusApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: "views/home.html",
            controller: "HomeController"
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
        })
        .when('/forsale', {
            templateUrl: "views/forSale.html",
            controller: "SalesController"
        }).otherwise({
            redirectTo:'/home'
        });
    $locationProvider
        .html5Mode(false)
        .hashPrefix('');
});