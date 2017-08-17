define(function (require) {
  var app = require('app/app');

  app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

  app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get.Pragma = 'no-cache';
    $httpProvider.defaults.headers.withCredentials = true;

    $urlRouterProvider.otherwise('/admin/users');

    $stateProvider

    .state('admin', {
      url: '/admin',
      views: {
        '': {
          templateUrl: 'app/home/home.html',
          controllerUrl: 'app/home/homeCtrl',
          controller: 'homeCtrl'
        },
        'nav@admin': {
          templateUrl: 'app/components/nav/nav.html',
          controllerUrl: 'app/components/nav/navCtrl',
          controller: 'navCtrl'
        },
        'aside@admin': {
          templateUrl: 'app/components/aside/aside.html',
          controllerUrl: 'app/components/aside/asideCtrl',
          controller: 'asideCtrl'
        }
      }
    })
    .state('admin.users', {
      url: '/users',
      templateUrl: 'app/users/list/list.html',
      // ajax负载控制器的新属性
      controllerUrl: 'app/users/list/listCtrl',
      controller: 'listCtrl',
      // 加载更多的控制器、服务和过滤器, ...
      dependencies: ['app/services/httpService']
    })
    .state('admin.orderList', {
      url: '/orderList',
      templateUrl: 'app/orders/list/list.html',
      controllerUrl: 'app/orders/list/listCtrl',
      controller: 'ordersListCtrl'
    });
  }]);
});
