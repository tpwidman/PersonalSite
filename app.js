var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.controller']);
  myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl : 'views/home/home.html',
        controller  : 'homeCtrl'
      })
      .when('/about', {
        templateUrl : 'views/about/about.html',
        controller  : 'aboutCtrl'
      })
      .when('/contacts', {
        templateUrl : 'views/contact/contact.html',
        controller : 'contactCtrl'
      })
      .when('/blog', {
        templateUrl : 'views/blog/blog.html',
        controller: 'blogCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });