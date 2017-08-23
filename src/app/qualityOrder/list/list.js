define([
  'app/app',
  'css!/assets/css/qualityOrder/list/list'
], function (app) {

  app.controller('qualityOrderListCtrl', ['$scope', function ($scope) {
    $scope.name = 'ordersList';
  }]);

});
