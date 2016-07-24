personalWebsite.controller('resumeController', ['$scope', '$http', function ($scope, $http) {
  
  $http({
    method : "GET",
    url : "/js/data/resume-data.js"
  }).then(function dataSuccess(response) {
    $scope.resume = response.data;
  }, function myError(response) {
    $scope.resume = response.statusText;
  });
  
}]);