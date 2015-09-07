app.service('PickaloApiService', ['$http', '$q',
  function($http, $q) {
    // var server = 'http://pickalo.herokuapp.com';
    var server = 'http://58da6b8b.ngrok.com';
    var q = $q;
    return {
      postForm: function(form) {
        var deferred = q.defer();
        $http.post(server + '/forms', {
          form: form
        }).success(function(data) {
          deferred.resolve(data);
        }).error(function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      },
      getResults: function(id, callback) {
        $http.get(server + '/winner/' + id).
        success(function(data) {
          callback(data);
        });
      }
    };
  }
]);
