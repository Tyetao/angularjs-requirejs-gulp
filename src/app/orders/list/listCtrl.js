define(['require','css!/assets/css/orders/list/list'], function (require) {
  var app = require('app/app');

  app.controller('ordersListCtrl', ['$scope', function ($scope) {
    $scope.name = 'ordersList';

  }]);
});
