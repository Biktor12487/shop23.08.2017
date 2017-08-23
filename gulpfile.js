'use strict';
 
var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
 
// SCSS compiled
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
 
    // Для генераии style.css.map
        .pipe(sourcemaps.init())
        // Собственно компиляция
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        // Куда положить .map
        
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        // префиксы
        // Путь компиляции
        .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
});
 
 
// JS COMPRESSED
gulp.task('compressed-js', function () {
    gulp.src('js/src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'));
});
 
gulp.task('compressed-js:watch', function () {
    gulp.watch('./js/src/*.js', ['compressed-js']);
});