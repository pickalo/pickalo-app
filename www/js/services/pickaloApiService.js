app.service('PickaloApiService', ['$http', '$q',
    function ($http, $q) {
        var server = 'http://192.168.20.34:3000';
        var q = $q;
        return {
            postForm: function (form) {
                var deferred = q.defer();
                $http.post(server + '/forms', {form: form}).success(function (data) {
                    deferred.resolve(data);
                }).error(function (err) {
                    deferred.reject(err);
                });
                return deferred.promise;
            }
        };
    }]);
