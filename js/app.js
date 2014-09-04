'use strict';

var App = angular.module('demo', ['ngAnimate', 'ngMaterial', 'ngRoute']);

App.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'template/demo.tmpl.html',
            controller: 'DemoCtrl'
        }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
]);
