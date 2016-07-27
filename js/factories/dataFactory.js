personalWebsite.factory('dataFactory', ['$http', function($http){
  
  var pageData = {};
  
  pageData.getPageData = function(dataUrl) {
    return $http.get(dataUrl);
  }

  return pageData;
  
}]);
