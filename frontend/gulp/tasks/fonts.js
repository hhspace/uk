import gulp from 'gulp';
import path from '../paths/path';

export const fonts = () => {
    return gulp.src(path.path.fonts.src)
        .pipe(gulp.dest(path.path.fonts.dist))
}
