
define(["require", "exports"], function(require, exports) {
  return angular.module("dev.env", [])
.constant("env", "dev.env")
.constant("apiUrl", "http://192.168.1.111:2080/")
.constant("imgUrl", "https://testadmin.1sju.com/uploadFile/");

});

