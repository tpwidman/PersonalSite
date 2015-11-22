var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);
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
      .when('/contact', {
        templateUrl : 'views/contact/contact.html',
        controller : 'contactCtrl'
      })
      .when('/blog', {
        templateUrl : 'views/blog/blog.html',
        controller: 'blogCtrl'
      })
      .when('/stuff', {
      templateUrl : 'views/stuff/stuff.html',
      controller: 'stuffCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });