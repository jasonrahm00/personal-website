personalWebsite.controller('portfolioController', ['$scope', '$http', function ($scope, $http) {
  
  $http({
    method : "GET",
    url : "/js/data/portfolio-data.js"
  }).then(function dataSuccess(response) {
    $scope.portfolio = response.data;
  }, function myError(response) {
    $scope.portfolio = response.statusText;
  });
  
}]);