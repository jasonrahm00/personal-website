//Portfolio Factory
personalWebsite.factory('portfolioFactory', ['$http', function($http){
  
  var portfolioData = {};
  
  portfolioData.getPortfolio = function() {
    return $http.get('js/data/portfolio-data.js');
  }

  return portfolioData;
  
}]);

//Resume Factory
personalWebsite.factory('resumeFactory', ['$http', function($http){
  
  var resumeData = {};
  
  resumeData.getResume = function() {
    return $http.get('js/data/resume-data.js');
  }

  return resumeData;
  
}]);
