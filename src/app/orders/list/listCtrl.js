define([
    'app/app',
    'css!/assets/css/orders/list/list'
  ], function (app) {

  app.controller('ordersListCtrl', ['$scope', function ($scope) {
    $scope.name = 'ordersList';
  }]);

});
