angular.module('personalWebsite').factory('dataFactory', function($http){
  
  var pageData = {};
  
  pageData.getPageData = function(dataUrl) {
    return $http.get(dataUrl);
  }

  return pageData;
  
});
