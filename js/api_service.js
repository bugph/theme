app.service('APIService', function($http) {
  var self = this;
  self.UrlApi = "http://192.168.1.45:8090";

  self.obterTodosBugs = function (callback){
      return $http({
        method: 'GET',
        url: self.UrlApi + '/api/bugs'
      })
  }

  return self;
})
