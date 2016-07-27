//Portfolio Controller
personalWebsite.controller('portfolioController', ['$scope', 'portfolioFactory', function ($scope, portfolioFactory) {
  
  $scope.portfolio;
  $scope.status;
  
  portfolioFactory.getPortfolio()
    .then(function(response){
      $scope.portfolio = response.data;
    }, function(error) {
      $scope.status = 'Unable to retreive data: ' + error.message;
  });
  
}]);

//Resume Controller
personalWebsite.controller('resumeController', ['$scope', 'resumeFactory', function ($scope, resumeFactory) {
  
  $scope.resume;
  $scope.status;
  
  resumeFactory.getResume()
    .then(function(response){
      $scope.resume = response.data;
    }, function(error) {
      $scope.status = 'Unable to retreive data: ' + error.message;
  });
  
}]);