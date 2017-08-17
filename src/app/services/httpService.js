define(['require'], function (require) {
  var app = require('../app');
  app.factory('httpService', ['$http', 'apiUrl', '$q', function ($http, apiUrl, $q) {
    return {
      get: function (parmas) {
        var deferred = $q.defer();
        $http.get(apiUrl + parmas)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });
        return deferred.promise;
      },
      post: function (parmas, data) {
        var deferred = $q.defer();
        $http.post(apiUrl + parmas, data)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });
        return deferred.promise;
      }
    };
  }]);
});
