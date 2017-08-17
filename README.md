## angularjs-requirejs-gulp按需加载
支持加载angularjs组件:
* `app.controller`
* `app.services`
* `app.filter`
* `app.directive`
* `app.value`
* `app.constant`
* `app.provider`
* `app.decorator`
##项目目录
```markdown
├── README.md
├── config
│   └── config.json //环境变量
├── node_modules    //npm包
├── gulpfile.js     //gulp任务配置
├── package.json    //npm包依赖
└── src             //项目代码
    ├── app
    │   ├── app-routes.js //路由配置
    │   ├── app.js
    │   ├── components    //公用组件
    │   │   ├── aside     //菜单栏组件  
    │   │   │   ├── aside.html
    │   │   │   ├── aside.scss
    │   │   │   └── asideCtrl.js
    │   │   └── nav       导航组件  
    │   │       ├── nav.html
    │   │       ├── nav.scss
    │   │       └── navCtrl.js
    │   ├── home
    │   │   ├── home.html
    │   │   ├── home.scss
    │   │   └── homeCtrl.js
    │   ├── orders      //订单模块
    │   │   └── list
    │   │       ├── list.html
    │   │       ├── list.scss
    │   │       └── listCtrl.js
    │   ├── services    //公用服务
    │   │   └── httpService.js
    │   ├── filter      //公用过滤器
    |   |   └── filter.js
    │   ├── directive   //公用指令
    |   |   └── directive.js
    │   └── users       //用户模块
    │       └── list
    │           ├── list.html
    │           ├── list.scss
    │           └── listCtrl.js
    ├── assets   //css、图片、js资源
    │   ├── css
    │   │   ├── components
    │   │   │   ├── aside
    │   │   │   │   └── aside.css
    │   │   │   └── nav
    │   │   │       └── nav.css
    │   │   ├── home
    │   │   │   └── home.css
    │   │   ├── orders
    │   │   │   ├── list
    │   │   │   │   └── list.css
    │   │   │   └── ordersList
    │   │   │       └── list.css
    │   │   └── users
    │   │       ├── list
    │   │       │   ├── list.css
    │   │       │   └── users.css
    │   │       └── users.css
    │   └── imgs
    │       └── IMG_0098.JPG
    ├── bootstrap.js//入口文件
    ├── config
    │   └── index.js //运行任务中生成的环境配置文件
    └── index.html
```

###下载
git clone https://github.com/Tyetao/angularjs-requirejs-gulp.git

###安装依赖
npm install

###运行
gulp dev --env dev(开发环境)
gulp test --env test(测试环境)
gulp build --enc production(开发环境)