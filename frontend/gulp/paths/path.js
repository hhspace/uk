var path = {
    clean: {
        main: [
            './templates/',
            './static/css/',
            './static/js/',
            './static/fonts/'
        ]
    },
    pug: {
        src: {
            page: './frontend/src/pages/**/*.pug',
            blocks: './frontend/src/blocks/**/*.pug',
            includes: './frontend/src/includes/**/*.pug',
            layouts: './frontend/src/layouts/*.pug'
        },
        dist: {
            main: './templates/',
            blocks: './templates/blocks',
            includes: './templates/includes/',
            layouts: './templates/layouts/'
        },
        watch: [
            './frontend/src/pages/**/*.pug',
            './frontend/src/blocks/**/*.pug',
            './frontend/src/includes/**/*.pug',
            './frontend/src/layouts/*.pug'
        ]
    },
    scss: {
        src: './frontend/src/assets/scss/style.scss',
        dist: './static/css',
        watch: [
            './frontend/src/assets/scss/*.scss',
            './frontend/src/blocks/**/*.scss',
            './frontend/src/includes/**/*.scss',
            './frontend/src/pages/**/*.scss'
        ]
    },
    img: {
        src: './frontend/src/assets/img/**/*.*',
        dist: './static/media/site/',
        watch: './frontend/assets/img/**/*.*'
    },
    fonts: {
        src: './frontend/src/assets/fonts/**/*.*',
        dist: './templates/fonts/**/*.*',
        watch: './frontend/src/assets/fonts/**/*.*'
    },
    js: {
        src: './frontend/src/assets/js/main.js',
        dist: './static/js/',
        watch: [
            './gulpfile.babel.js',
            './gulp/**/*.js',
            './frontend/src/assets/js/*.js',
            './frontend/src/blocks/*.js',
            './frontend/src/components/*.js'
        ]
    },
    jsVendors: {
        src: './frontend/src/assets/js/vendors/*.*',
        dist: './static/js/vendors/',
        watch: './frontend/src/assets/js/vendors/*.*'
    }
};

module.exports = {path: path};