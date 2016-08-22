//Portfolio Controller
personalWebsite.controller('portfolioController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
  
  var portfolioDataUrl = 'js/data/portfolio-data.json';
  $scope.portfolio;
  $scope.status;
  
  dataFactory.getPageData(portfolioDataUrl)
    .then(function(response){
      $scope.portfolio = response.data;
    }, function(error) {
      $scope.status = 'Unable to retreive data: ' + error.message;
  });
  
}]);

//Resume Controller
personalWebsite.controller('resumeController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
  
  var resumeDataUrl = 'js/data/resume-data.json';
  $scope.resume;
  $scope.status;
  
  dataFactory.getPageData(resumeDataUrl)
    .then(function(response){
      $scope.resume = response.data;
    }, function(error) {
      $scope.status = 'Unable to retreive data: ' + error.message;
  });
  
}]);