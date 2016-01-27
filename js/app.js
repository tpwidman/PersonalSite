var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);
  myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        title: 'Home',
        templateUrl : 'views/home/home.html',
        controller  : 'homeCtrl'
      })
      .when('/about', {
        title: 'About',
        templateUrl : 'views/about/about.html',
        controller  : 'aboutCtrl'
      })
      .when('/contact', {
        title: 'Contact',
        templateUrl : 'views/contact/contact.html',
        controller : 'contactCtrl'
      })
      .when('/stuff', {
        title: 'Stuff',
        templateUrl : 'views/stuff/stuff.html',
        controller: 'stuffCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
  myApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);