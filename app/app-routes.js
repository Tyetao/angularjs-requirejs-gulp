define(function (require) {
    var app = require('./app');

    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/admin/users');
        // $urlRouterProvider.html5Mode(true);

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
                templateUrl: 'app/users/users.html',
                // new attribute for ajax load controller
                controllerUrl: 'app/users/usersCtrl',
                controller: 'usersCtrl'
                // load more controllers, services, filters, ...
                // dependencies: ['services/usersService']
            })
            .state('admin.orders', {
                url: '/orders',
                templateUrl: 'app/orders/order.html',
                // new attribute for ajax load controller
                controllerUrl: 'app/orders/ordersCtrl',
                controller: 'ordersCtrl'
            });
    }]);
});
