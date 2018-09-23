import babel from 'gulp-babel';
import concat from 'gulp-concat';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import path from '../paths/path';

export const scripts = () => {
  return gulp.src(path.path.js.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(path.path.js.dist));
}

export const jsVendors = () => {
  return gulp.src(path.path.jsVendors.src)
    .pipe(gulp.dest(path.path.jsVendors.dist));
}