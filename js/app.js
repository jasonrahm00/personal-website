var personalWebsite = angular.module('personalWebsite', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngResource']);

//ROUTES

personalWebsite.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "views/home.html",
      controller: "homePageController",
      title: "Jason Rahm"
    })
    .when('/portfolio', {
      templateUrl: "views/portfolio.html",
      controller: "portfolioController",
      title: "Jason Rahm's Portfolio"
    })
    .when('/resume', {
      templateUrl: "views/resume.html",
      controller: "resumeController",
      title: "Jason Rahm's Resume"
    })
    .when('/contact', {
      templateUrl: "views/contact.html",
      title: "Contact Jason Rahm"
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

personalWebsite.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);