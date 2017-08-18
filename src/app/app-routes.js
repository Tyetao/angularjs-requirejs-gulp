define(['app/app'],function (app) {

  app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

  app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    var timestamp = new Date().getTime();//定义时间戳用于清除浏览器缓存

    $httpProvider.defaults.headers.withCredentials = true;

    $urlRouterProvider.otherwise('/admin/chat');

    $stateProvider

    .state('admin', {
      url: '/admin',
      views: {
        '': {
          templateUrl: 'app/home/home.html?timestamp=' + timestamp,
          controllerUrl: 'app/home/homeCtrl',
          controller: 'homeCtrl'
        },
        'nav@admin': {
          templateUrl: 'app/components/nav/nav.html?timestamp=' + timestamp,
          controllerUrl: 'app/components/nav/navCtrl',
          controller: 'navCtrl'
        },
        'aside@admin': {
          templateUrl: 'app/components/aside/aside.html?timestamp=' + timestamp,
          controllerUrl: 'app/components/aside/asideCtrl',
          controller: 'asideCtrl'
        }
      }
    })
    .state('admin.chat', {
      url: '/chat',
      templateUrl: 'app/chat/chat.html?timestamp=' + timestamp, //模板地址
      controllerUrl: 'app/chat/chatCtrl', //控制器地址
      controller: 'chatCtrl'  //控制器名称
    })
    .state('admin.users', {
      url: '/users',
      templateUrl: 'app/users/list/list.html?timestamp=' + timestamp,
      controllerUrl: 'app/users/list/listCtrl',
      controller: 'listCtrl',
      // 加载更多的控制器、服务和过滤器, ...
      dependencies: ['app/services/httpService']
    })
    .state('admin.orderList', {
      url: '/orderList',
      templateUrl: 'app/orders/list/list.html?timestamp=' + timestamp,
      controllerUrl: 'app/orders/list/listCtrl',
      controller: 'ordersListCtrl'
    });
  }]);
});
