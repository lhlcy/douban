//自动化构建
var gulp=require('gulp');
//js压缩和混淆
//var uglify=require('gulp-uglisfy');
//css压缩
var cssnano=require('gulp-cssnano');
//html压缩
var htmlmin=require('gulp-htmlmin');
//文件合并
var concat=require('gulp-concat');;
//路径替换
// var useref=require('gulp-useref');
//同步浏览器
var browserSync=require('browser-sync').create();
//gulp任务：js压缩和混淆
gulp.task('js',function(){
    gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular-route/angular-route.min.js'])
        .pipe(gulp.dest('./app_dist/assets/js'));
    gulp.src('./app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./app_dist/'))
    .pipe(browserSync.reload({stream:true}))
});
//合并和压缩css
gulp.task('css', function() {
    gulp.src('./app/**/*.css')
        .pipe(concat('all.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./app_dist/assets/css/'))
        .pipe(browserSync.reload({stream: true}))
});
//压缩html
//gulp.task('html',function(){
//    gulp.src(['./app/**/*.html'])
//    .pipe(htmlmin({collapseWhitespace: true, removeComments: true }))
//    .pipe(gulp.dest('./app_dist/'))
//        .pipe(browserSync.reload({stream:true}))
//});
gulp.task('browser-sync',function(){
    browserSync.init({
        server:'./app_dist'
    });
});
//gulp任务：监视文件变化
gulp.task('watch',['brwoser-sync'],function(){
 
    gulp.watch('./app/**/*.css',['css'])
    gulp.watch('./app/**.*.js',['js'])
    });
//设置默认任务
gulp.task('default',['css','js','watch']);