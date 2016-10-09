var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

/*browser-sync*/
gulp.task('browser-sync', function () {
   var files = [
      'app/*.html',
      'app/css/*.css',
      'app/js/*.js'
   ];

   require('browser-sync').init(files, {
      server: {
         baseDir: './app'
      }
   });
});
