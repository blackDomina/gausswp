var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var rucksack = require('gulp-rucksack');
var sass = require('gulp-sass');
var processors = [autoprefixer , lost , rucksack];
 

gulp.task('sass', function () {
    gulp.src('wp-content/themes/from-zero/sass/style.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(rucksack())
    .pipe(gulp.dest('wp-content/themes/from-zero/'));
});

gulp.task('default',['sass']);
