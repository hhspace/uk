import gulp from 'gulp';
import { reload } from './server';
import { html, htmlBlocks, htmlIncludes, htmlLayouts } from './pug';
import { style } from './scss';
import { scripts } from './script';
import { fonts } from './fonts';
import { image } from './img';
import path from '../paths/path';

export const watchFiles = () => 
    gulp.watch(path.path.pug.watch, gulp.series(html, htmlBlocks, htmlIncludes, htmlLayouts, reload));
    gulp.watch(path.path.scss.watch, gulp.series(style, reload));
    gulp.watch(path.path.js.watch, gulp.series(scripts, reload));
    gulp.watch(path.path.fonts.watch, gulp.series(fonts, reload));
    gulp.watch(path.path.img.watch, gulp.series(image, reload));
