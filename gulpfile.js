const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  gulpConcat = require('gulp-concat'),
  gulpRename = require('gulp-rename'),
  gulpCssmin = require('gulp-minify-css'),
  gulpUglify = require('gulp-uglify'),
  gulpClean = require('gulp-clean'),
  gulpHtmlmin = require('gulp-htmlmin'),
  gulpSequence = require('gulp-sequence'),
  jshint = require('gulp-jshint'),
  ngConstant = require('gulp-ng-constant'),
  gulpif = require('gulp-if'),
  minimist = require('minimist'),
  reload = browserSync.reload;

// 静态服务器
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: ["src"],
      routes: {
        "/node_modules": "node_modules"
      },
      index: './index.html'
    },
    // host: "192.168.1.103",
    port: 8000,
    //点击，滚动和表单在任何设备上输入将被镜像到所有设备里（当然你必须正确使用了Url)
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    },
    logLevel: "info",
    logPrefix: "我的项目",//改变控制台日志前缀
    logConnections: true,
    // browser: ["google"],
    notify: false//不显示在浏览器中的任何通知。
  });

  gulp.watch('src/app/**/*.scss', ['sass']);
  gulp.watch('src/app/**/*', ['lint']).on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', () => {
  return gulp.src('src/app/**/*.scss')
  .pipe(autoprefixer({browsers: ['last 2 versions']}))  //添加css3前缀
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //压缩
  .pipe(gulp.dest('src/assets/css'))
  .pipe(reload({stream: true}));//把css注入浏览器
});

// css合并
gulp.task('concat', () => {
  return gulp.src('src/assets/css/**/*.css')
  .pipe(gulpConcat('main.css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(gulpRename('main.min.css'))
  .pipe(gulpCssmin())
  .pipe(gulp.dest('dist/css'));
});

// html压缩
gulp.task('htmlmin', () => {
  const options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  };
  gulp.src('dist/app/**/*.html')
  .pipe(gulpHtmlmin(options))
  .pipe(gulp.dest('dist/app'));

  gulp.src('dist/*.html')
  .pipe(gulpHtmlmin(options))
  .pipe(gulp.dest('dist/'));
});

// js压缩
gulp.task('script', () => {
  gulp.src('dist/app/**/*.js')
  .pipe(gulpUglify())
  .pipe(gulp.dest('dist/app'));

  gulp.src('dist/*.js')
  .pipe(gulpUglify())
  .pipe(gulp.dest('dist'));
});

// 图片压缩
gulp.task('images', () => {
  return gulp.src('dist/imgs/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/imgs'))
});

// 清除
gulp.task('clear', () => {
  return gulp.src('./dist')
  .pipe(gulpClean());
});

//清除开发环境的配置
gulp.task('clearDev', () => {
  return gulp.src('./src/config/*.js')
  .pipe(gulpClean());
});

// 拷贝
gulp.task('copy', () => {
  return gulp.src(['src/**/*', '!src/**/*.scss'])
  .pipe(gulp.dest('dist/'));
});

//检测js代码
gulp.task('lint', () => {
  return gulp.src('src/app/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// 设置环境
gulp.task('env', () => {
  let options = minimist(process.argv.slice(2));
  let myConfig = require('./config/config.json');
  let envConfig = myConfig[options.env];
  return ngConstant({
    name: envConfig.env,
    constants: envConfig,
    stream: true,
    wrap: 'amd'
  })
  .pipe(gulpif(options.env === 'prod', gulpUglify()))
  .pipe(gulpRename('index.js'))
  .pipe(gulpif(options.env !== 'dev', gulp.dest('dist/config'), gulp.dest('src/config')));
});
//im
var jsArr = [
  'src/IM/im/js/angular-sanitize.min.js',
  'src/IM/3rd/Web_SDK_Base_v2.8.0.js',
  'src/IM/3rd/Web_SDK_NIM_v2.8.0.js',
  'src/IM/3rd/jquery-1.11.3.min.js',
  'src/IM/3rd/jquery-1.11.3.min.js',
  'src/IM/im/js/3rd/jquery-ui.min.js',
  'src/IM/im/js/config.js',
  'src/IM/im/js/emoji.js',
  'src/IM/im/js/util.js?v=2',
  'src/IM/im/js/cache.js?v=2',
  'src/IM/im/js/link.js',
  'src/IM/im/js/ui.js?v=2',
  'src/IM/im/js/widget/uiKit.js?v=2',
  'src/IM/im/js/module/base.js',
  'src/IM/im/js/module/message.js',
  'src/IM/im/js/module/sysMsg.js',
  'src/IM/im/js/module/personCard.js',
  'src/IM/im/js/module/session.js',
  'src/IM/im/js/module/friend.js',
  'src/IM/im/js/module/team.js',
  'src/IM/im/js/module/cloudMsg.js',
  'src/IM/im/js/module/notification.js',
  'src/IM/im/js/main.js?v=2'
];
gulp.task("imJsConcat",['imCssConcat'] , function () {
  return gulp.src(jsArr)
  .pipe(gulpConcat('main.js'))
  .pipe(gulpRename('im.min.js'))
  .pipe(gulpUglify())
  .pipe(gulp.dest('src/app/im/js'));
});
gulp.task("imCssConcat", function () {
  return gulp.src(['src/IM/im/css/*.css','src/IM/im/css/**/*.css'])
  .pipe(gulpConcat('im.css'))
  .pipe(gulpRename('im.min.css'))
  .pipe(gulpCssmin())
  .pipe(gulp.dest('src/app/im/css'));
});


gulp.task('default', ['dev']);
gulp.task('dev', gulpSequence('clearDev', 'env', 'sass', 'serve'));//开发环境//, 'lint'
gulp.task('test', gulpSequence('clear', 'sass', 'copy', 'env'));//测试环境
gulp.task('build', gulpSequence('clear', 'sass', 'copy', 'htmlmin', 'script', 'images', 'env'));//生产环境