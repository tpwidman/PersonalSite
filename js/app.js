var myApp = angular.module('myApp', ['ngRoute', 'ngResource'])
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
        .when('/projects', {
            title: 'Projects',
            templateUrl : 'views/projects/projects.html',
            controller: 'projectsCtrl'
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