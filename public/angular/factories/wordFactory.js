
app.factory('wordFactory', function($http){
  var factory={};
  var words=[];
  
  factory.getWords=function(callback){
    $http.get('/api/words').then(function(data){
      words=data.data;
      callback(data.data);
    });
  };
  
  return factory;
});