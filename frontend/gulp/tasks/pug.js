import gulp from 'gulp';
import pug from 'gulp-pug';
import path from '../paths/path';

global.$ = {
    fs: require('fs')
};

export const html = () => {
    return gulp.src(path.path.pug.src.page)
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(gulp.dest(path.path.pug.dist.main))
}

export const htmlBlocks = () => {
    return gulp.src(path.path.pug.src.blocks)
        .pipe(pug({
            pretty: '    ',
        }))
        .pipe(gulp.dest(path.path.pug.dist.blocks))
}

export const htmlLayouts = () => {
    return gulp.src(path.path.pug.src.layouts)
        .pipe(pug({
            pretty: '    ',
        }))
        .pipe(gulp.dest(path.path.pug.dist.layouts))
}

export const htmlIncludes = () => {
    return gulp.src(path.path.pug.src.includes)
        .pipe(pug({
            pretty: '    ',
        }))
        .pipe(gulp.dest(path.path.pug.dist.includes))
}