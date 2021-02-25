var gulp = require('gulp'); 
var rigger = require('gulp-rigger');
var rename = require("gulp-rename");

gulp.task('build-html', async function() {
    gulp.src('build.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));

    gulp.src('pages/templates/calendar-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('calendar.html'))
    .pipe(gulp.dest('./pages'));

    gulp.src('pages/templates/checkbox-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('checkbox.html'))
    .pipe(gulp.dest('./pages'));

    gulp.src('pages/templates/histogram-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('histogram.html'))
    .pipe(gulp.dest('./pages'));

     gulp.src('pages/templates/modal-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('modal.html'))
    .pipe(gulp.dest('./pages'));

    gulp.src('pages/templates/input-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('input.html'))
    .pipe(gulp.dest('./pages'));
    
    gulp.src('pages/templates/radiobutton-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('radiobutton.html'))
    .pipe(gulp.dest('./pages'));

     gulp.src('pages/templates/skeleton-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('skeleton.html'))
    .pipe(gulp.dest('./pages'));

   gulp.src('pages/templates/toggler-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('toggler.html'))
    .pipe(gulp.dest('./pages'));

    gulp.src('pages/templates/tooltip-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('tooltip.html'))
    .pipe(gulp.dest('./pages'));

    gulp.src('pages/templates/avatar-template.html') // Get source files with gulp.src
    .pipe(rigger()) // Sends it through a gulp plugin
    .pipe(rename('avatar.html'))
    .pipe(gulp.dest('./pages'));
});
