define([
  'app/app',
  'css!/assets/css/users/users'
], function (app) {

  // 动态加载服务，或者添加到ui-路由器状态配置的依赖项中
  // require('../services/usersService');

  app.controller('listCtrl', ['$scope', function ($scope) {

    // 获取服务
    // var httpService = app.get('httpService');
    //
    // var promise1 = httpService.post('teacher/addTeacher',{
    //     "id":11,
    //     "name":"2017-10-10"}
    // );
    //
    // promise1.then(function (res) {
    //   console.log(res);
    // }, function (err) {
    //   console.log(res);
    // });
    //
    // var promise = httpService.get('teacher/findTeacher/11');
    // promise.then(function (res) {
    //   console.log(res);
    // }, function (err) {
    //   console.log(res);
    // });
  }]);

});
