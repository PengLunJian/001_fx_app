'use strict';

var gulp = require('gulp');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var plugins = require('gulp-load-plugins')();
var postCssConfig = [cssnext, autoprefixer];
var runSequence = require('run-sequence');

var srcPath = 'src/';
var devPath = 'build/';

gulp.task('clean', function () {
    return gulp.src(devPath)
        .pipe(plugins.clean({force: true}));
});

gulp.task('axml', function () {
    return gulp.src(srcPath + '**/*.axml')
        .pipe(gulp.dest(devPath));
});

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

gulp.task('script', function () {
    return gulp.src(srcPath + '**/*.js')
        .pipe(gulp.dest(devPath));
});

gulp.task('json', function () {
    return gulp.src(srcPath + '**/*.json')
        .pipe(gulp.dest(devPath));
});

gulp.task('font', function () {
    return gulp.src(srcPath + 'assets/fonts/*')
        .pipe(gulp.dest(devPath + 'assets/fonts'));
});

gulp.task('image', function () {
    return gulp.src(srcPath + 'assets/images/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(devPath + 'assets/images'));
});

gulp.task('build', function (callback) {
    runSequence(
        'clean',
        'axml',
        'less',
        'json',
        'script',
        'font',
        'image',
        callback
    );
});

gulp.task('dev', function (callback) {
    runSequence(
        'build',
        'watch',
        callback
    );
});

gulp.task('default', ['dev']);

gulp.task('watch', function () {
    var axmlPath = srcPath + '**/*.axml';
    var lessPath = srcPath + '**/*.less';
    var scriptPath = srcPath + '**/*.js';
    var jsonPath = srcPath + '**/*.json';
    var fontPath = srcPath + 'assets/fonts/*';
    var imagePath = srcPath + 'assets/images/*';

    gulp.watch(axmlPath, ['axml']);
    gulp.watch(lessPath, ['less']);
    gulp.watch(scriptPath, ['script']);
    gulp.watch(jsonPath, ['json']);
    gulp.watch(fontPath, ['font']);
    gulp.watch(imagePath, ['image']);
});