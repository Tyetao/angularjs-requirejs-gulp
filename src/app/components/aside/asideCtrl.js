define([
  'app/app',
  'css!/assets/css/components/aside/aside',
  'css!/assets/iconfont/iconfont'
], function (app) {
  app.controller('asideCtrl', ['$scope', function ($scope) {
    var html = "";
    var icon = "";
    var tree = [{
      "id": "1",
      "pid": "0",
      "name": "首页",
      "href": "chat",
      "icon": "icon-shouye-shouye",
    }, {
      "id": "2",
      "pid": "0",
      "name": "订单管理",
      "href": "orderList",
      "icon": "icon-dingdan",
      "children": []
    }, {
      "id": "3",
      "pid": "0",
      "name": "质检订单",
      "href": "qualityOrder",
      "icon": "icon-dingdan",
      "children": []
    }, {
      "id": "4",
      "pid": "0",
      "name": "账号管理",
      "icon": "icon-zhanghaoguanli",
      "href": "account",
      "children": []
    }, {
      "id": "5",
      "pid": "0",
      "name": "接单配置",
      "icon": "icon-zhanghaoguanli",
      "href": "orderConfig",
      "children": []
    }
    ];
    var treeJson = function (json) {
      $.each(json, function (i, v) {
        if (v.icon) {
          icon = 'iconfont ' + v.icon;
        } else {
          icon = "tyt-aside-treeLine";
        }
        var urlstr = "";
        urlstr = '<li class="xj_aside_list_item"><a ui-sref=' + 'admin.' + v.href + ' href=' + "#!/admin/" + v.href + '><i class="' + icon + '"></i><font>' + v.name + '</font><b class="fa fa-angle-down"></b></a><ul class="xj_aside_list_item_ch clearfix">';
        html += urlstr;
        if (v.children != null) {
          treeJson(v.children);
        }
        html += '</ul></li>';
      });
      return html;
    };
    $('.json').html(treeJson(tree));
    //判读是否有子菜单
    $(".xj_aside_list_item_ch").each(function (index, element) {
      var ulContent = $(element).html();
      if (ulContent) {
        $(element).siblings("a").removeAttr("ui-sref");
        $(element).siblings("a").removeAttr("href");
      } else {
        $(element).siblings("a").children("b").removeAttr("class");
      }
    });


    var isChildren = function () {
      $(".xj_aside a").click(function () {
        var ul = $(this).siblings("ul");
        var li = $(this).closest('li.xj_aside_list_item');
        var liSib = li.siblings('li.xj_aside_list_item');
        //if (ul.find("li").html() != null) {
        if (ul.css("display") == "none") {
          ul.stop().slideDown(300);
          li.addClass('ohover');
          liSib.find('ul').stop().slideUp(300);
          liSib.removeClass('ohover');
          liSib.find('a').children('b').css({'transform': 'rotate(0deg', 'transform-origin': '50% 50%'});
          //旋转小三角
          $(this).children('b').css({'transform': 'rotate(180deg', 'transform-origin': '50% 50%'});
          //隐藏树形菜单最后一根线
          $(this).siblings('ul').children('li:last').children('a').children('i').css({
            'background-image': 'url(/assets/imgs/saaa1.png)',
            'background-repeat': 'no-repeat'
          });
          //取消小三角
          $(this).siblings('ul').children('li').children('a').children('b').removeAttr("class");
        } else {
          ul.stop().slideUp(300);
          li.removeClass('ohover');
          $(this).children('b').css({'transform': 'rotate(0deg', 'transform-origin': '50% 50%'});
        }
        //}
      });
    }();
  }]);
});