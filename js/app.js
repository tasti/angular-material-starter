'use strict';

var App = angular.module('myApp', ['ngAnimate', 'ngMaterial', 'ngRoute']);

App.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'template/my.tmpl.html',
            controller: 'MyCtrl'
        }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
]);
