define([
  'app/app',
  'css!/assets/css/login/login'
], function (app) {

  app.controller('loginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.login = function () {
      console.log()
    };
  }]);

});