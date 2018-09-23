import gulp from 'gulp';

import { clean }        from './frontend/gulp/tasks/clean';
import { html, htmlBlocks, htmlIncludes, htmlLayouts }         from './frontend/gulp/tasks/pug';
import { style }        from './frontend/gulp/tasks/scss';
import { fonts }        from './frontend/gulp/tasks/fonts';
import { image }        from './frontend/gulp/tasks/img';
import { scripts, jsVendors }      from './frontend/gulp/tasks/script';
import { serve }        from './frontend/gulp/tasks/server';
import { watchFiles }   from './frontend/gulp/tasks/watch';

const build = gulp.series (
    clean,
    gulp.parallel (
        html, 
        htmlBlocks, 
        htmlIncludes, 
        htmlLayouts,
        style,
        scripts,
        jsVendors,
        fonts,
        image
    ),
    gulp.parallel (
        serve,
        watchFiles
    )
);


gulp.task('build', build);
export default build;