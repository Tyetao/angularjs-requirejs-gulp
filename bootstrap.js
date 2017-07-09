require.config({
    baseUrl: './',
    paths: {
        'text': 'node_modules/text/text',
        'css': 'node_modules/require-css/css.min',
        'angular': 'node_modules/angular/angular.min',
        'jquery': 'node_modules/jquery/dist/jquery',
        'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-async-loader': 'node_modules/angular-async-loader/angular-async-loader.min',
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']}
    }
});

require(['angular','jquery','./app/app-routes'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});

