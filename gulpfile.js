var gulp = require('gulp'); 
var rigger = require('gulp-rigger');
var rename = require("gulp-rename");

gulp.task('build-html', function() {
    gulp.src('build.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
});
