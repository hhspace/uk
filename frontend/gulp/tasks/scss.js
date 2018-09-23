import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import path from '../paths/path';

export const style = () => {
    return gulp.src(path.path.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.path.scss.dist))
}
