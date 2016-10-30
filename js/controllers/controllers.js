//Portfolio Controller
angular.module('personalWebsite').controller('portfolioController', function ($scope, dataFactory) {
  
  var portfolioDataUrl = '../../data/portfolio-data.json';
  $scope.portfolio;
  $scope.status;
  
  dataFactory.getPageData(portfolioDataUrl)
    .then(function(response){
      $scope.portfolio = response.data;
    }, function(error) {
      $scope.status = 'Unable to retreive data: ' + error.message;
  });
  
});

//Resume Controller
angular.module('personalWebsite').controller('resumeController', function ($scope, dataFactory) {
  
  var resumeDataUrl = '../../data/resume-data.json';
  $scope.resume;
  $scope.status;
  
  dataFactory.getPageData(resumeDataUrl)
    .then(function(response){
      $scope.resume = response.data;
    }, function(error) {
      $scope.status = 'Unable to retreive data: ' + error.message;
  });
  
});