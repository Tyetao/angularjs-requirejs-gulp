define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');
    var dev = require('config/index');//环境配置
    require('angular-ui-router');

    var app = angular.module('app', ['ui.router',dev.name]);

    asyncLoader.configure(app);

    module.exports = app;
});
