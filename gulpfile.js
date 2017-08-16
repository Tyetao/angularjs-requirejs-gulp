var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
	gulpConcat = require('gulp-concat'),
	gulpRename = require('gulp-rename'),
	gulpCssmin = require('gulp-minify-css'),
	gulpUglify = require('gulp-uglify'),
	gulpClean = require('gulp-clean'),
  reload = browserSync.reload;

// 静态服务器
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
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
    browser: ["google chrome"],
    notify: false//不显示在浏览器中的任何通知。
  });

  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/**/*').on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
  gulp.src('app/**/*.scss')
    .pipe(autoprefixer({browsers: ['last 2 versions']}))  //添加css3前缀
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) //压缩
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({ stream: true }));//把css注入浏览器
});

// css合并
gulp.task('concat',function () {
	gulp.src('assets/css/**/*.css')
		.pipe(gulpConcat('main.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(gulpRename('main.min.css'))
		.pipe(gulpCssmin())
		.pipe(gulp.dest('dist/css'));
});

// js压缩
gulp.task('script', function() {
	gulp.src('dist/**/*.js')
		.pipe(gulpUglify({ mangle: false }))
		.pipe(gulp.dest('dist/'))
})


// 图片压缩
gulp.task('images', function () {
  gulp.src('dist/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs'))
});

// 清除
gulp.task('clear', function () {
	return gulp.src('dist/**', {read: false})
		.pipe(gulpClean());
});

// 拷贝
gulp.task('copy',function(){
	gulp.src(['app/**/*','assets/**/*','!app/**/*.scss'])
		.pipe(gulp.dest('dist/app'));

	gulp.src('assets/**/*')
		.pipe(gulp.dest('dist/assets'));
});


gulp.task('dev', ['serve', 'sass']);
gulp.task('test');
gulp.task('build', ['sass', 'clear', 'copy','script','images']);