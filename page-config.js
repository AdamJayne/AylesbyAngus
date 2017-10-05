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
            controllerAs: "ctrl"
        })
        .when('/about', {
            templateUrl: "views/about.html",
            controller: "AboutController"
        })
        .when('/forsale', {
            templateUrl: "views/forSale.html",
            controller: "SalesController"
        }).when('/404', {
            templateUrl: "views/404.html",
            controller: "404Controller"
        }).otherwise({
            redirectTo:'/404'
        });
    $locationProvider
        .html5Mode(false)
        .hashPrefix('');
});