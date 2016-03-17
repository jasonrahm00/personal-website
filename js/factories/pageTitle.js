personalWebsite.factory('Page', function(){
  var meta = '';
  return {
    meta: function() { return meta; },
    setMeta: function(newMeta) { meta = newMeta;}
  };
});