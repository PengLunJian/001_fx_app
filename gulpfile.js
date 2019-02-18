'use strict';

var gulp = require('gulp');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var plugins = require('gulp-load-plugins')();
var postCssConfig = [cssnext, autoprefixer];

//  定义项目路径
var srcPath = 'src/',
    // devPath = 'build/',
    devPath = 'build/';

//  清除build
gulp.task('clean', function () {
    return gulp.src(devPath)
        .pipe(plugins.clean({force: true}));
});

gulp.task('copy', function () {
    return gulp.src(srcPath + 'app.less')
        .pipe(plugins.less())
        .pipe(plugins.rename({extname: '.acss'}))
        .pipe(gulp.dest(devPath));
});

//  执行LESS编译、添加浏览器前缀
gulp.task('less', function () {
    var paths = [
        srcPath + '**/*.less',
        '!' + srcPath + 'assets/less/*'
    ];
    return gulp.src(paths)
        .pipe(plugins.less())
        .pipe(plugins.postcss(postCssConfig))
        .pipe(plugins.rename({extname: '.acss'}))
        .pipe(gulp.dest(devPath));
});

//  构建未压缩混淆版本到build目录
gulp.task('build', function (callback) {
    runSequence(
        'clean',
        'copy',
        callback
    );
});

//  起一个本地开发服务器
gulp.task('server', function () {
    gulp.watch(srcPath + '*', ['build']);
});

//  开发时命令
gulp.task('dev', function (callback) {
    runSequence(
        'build',
        'server',
        callback
    );
});

//  默认执行开发命令
gulp.task('default', ['dev']);