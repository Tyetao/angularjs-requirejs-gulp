define([
  'app/app',
  'css!/assets/css/chat/chat',
], function (app) {

  app.controller('chatCtrl', ['$scope', function ($scope) {
    $scope.name = 'chat';
  }]);

});