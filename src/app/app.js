define([
  'require',
  'angular',
  'angular-ui-router',
  'angular-async-loader',
  'config',
  'exports',
  'module'
], function (require, angular, uiRouter, asyncLoader, dev, exports, module) {

  var app = angular.module('app', ['ui.router', dev.name]);

  asyncLoader.configure(app);

  module.exports = app;
});
