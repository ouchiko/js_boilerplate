/**
 * Gulp Build file for css
 *
 */
var gulp = require('gulp');
/* Modules */
var uglifycss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();
/** Assets */
var assets = ['src/css/app.css'];
console.log("Loading gulp process..");

/**
 * Build
 * Builds the CSS
 *
 */
gulp.task('build', function(){
    console.log("Building assets..");
    for (var i in assets) {
        return gulp.src(assets[i])
            .pipe(uglifycss({
              "maxLineLen": 80,
              "uglyComments": true
          }))
            .pipe(gulp.dest('./build/css'));
    }
});

/**
 * Runs a browser sync for the auto updates
 *
 */
gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "localhost:80"
  })
})

/**
 * Watches stuff and syncs
 *
 */
gulp.task('watch', function(){
    console.log("Watching..");
    gulp.watch(assets, ['build']);
});
