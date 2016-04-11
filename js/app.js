var personalWebsite = angular.module('personalWebsite', ['ngAnimate', 'ui.bootstrap', 'ui.router' ]);

//ROUTES

personalWebsite.config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('home', {
      url: '',
      templateUrl: 'views/home.html',
      controller: 'homePageController'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'views/resume.html',
      controller: 'resumeController'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'views/portfolio.html',
      controller: 'portfolioController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
    });
  
  $urlRouterProvider.otherwise('/');
  
});