require.config({
  baseUrl: './',
  paths: {
    'text': 'node_modules/text/text',
    'css': 'node_modules/require-css/css.min',
    'angular': 'node_modules/angular/angular.min',
    'jquery': 'node_modules/jquery/dist/jquery.min',
    'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router.min',
    'angular-async-loader': 'node_modules/angular-async-loader/angular-async-loader.min',
  },
  shim: {//配置不支持AMD模块的库
    'angular': {
      exports: 'angular'
    },
    'angular-ui-router': {
      deps: ['angular']
    }
  },
  urlArgs: 'timestamp=' + new Date().getTime() //防止缓存
});

require(['angular', 'jquery', './app/app-routes'], function (angular) {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
    angular.element(document).find('html').addClass('ng-app');
  });
});

