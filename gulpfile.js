var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync')
var reload = browserSync.reload;
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var series = require('stream-series');
var header = require('gulp-header');
var rev = require('gulp-rev');
var pkg = require('./package.json');
var cleanCSS = require('gulp-clean-css');
var ngAnnotate = require('gulp-ng-annotate');
var gutil = require('gulp-util');


// Distribution Build Directory
var prodBuild = 'build/';
var devBuild = 'dev/'


var appJS = [
    'app/js/app.js',
    'app/js/app.config.js',
    'app/js/app.service.js',
    'app/js/app.controller.js'
];

var partial = [
    'app/partials/home_page.html'
]

var appCSS = [
    'app/css/font-awesome.min.css',
    'app/css/style.css'

];

var staticCSS = [
    'app/css/style.css'
]


/* CSS Compilation */

gulp.task('compile:app-css', function() {
    return gulp.src(appCSS)
        .pipe(plumber())
        .pipe(gulp.dest('dev/style/'))
        .pipe(reload({ stream: true }));

});

gulp.task('compile:static-css', function() {
    return gulp.src(staticCSS)
        .pipe(plumber())
        .pipe(gulp.dest('dev/style/'))
        .pipe(reload({ stream: true }));
});


/*  Build all styles */
gulp.task('compile:dev:styles', function(callback) {
    runSequence('compile:app-css', 'compile:static-css', callback);
});


/// /////////////////
/// JS TASKS
/// ////////////////

gulp.task('compile:app-js', function() {
    return gulp.src(appJS)
        .pipe(concat('agrostar.app.js'))
        .pipe(gulp.dest('dev/js/'))
        .pipe(reload({ stream: true }));
});

gulp.task('compile:dev:partials', function() {
    return gulp.src(partial)
        .pipe(plumber())
        .pipe(gulp.dest('dev/partials/'))
        .pipe(reload({ stream: true }));
})

gulp.task('compile:dev:images', function() {
    return gulp.src('app/images/**.png')
        .pipe(gulp.dest('dev/images/'));
});
// Compile all dev tasks

gulp.task('compile:dev', ['compile:app-js', 'compile:dev:styles', 'compile:dev:partials', 'compile:dev:images']);


gulp.task('browser-sync-dev', function() {
    browserSync({
        server: {
            baseDir: "./dev"
        }
    });
});

/// //////////////////////
/// Dependency Injection
/// //////////////////////

gulp.task('dev-inject', ['compile:dev'], function() {
    var target = gulp.src('./app/index.html');
    var appcss = gulp.src('./dev/style/*.css', { read: false });
    var appstreamJS = gulp.src(['./dev/**/*.app.js'], { read: false });

    return target.pipe(inject(series(appcss), { ignorePath: 'dev/', }))
        .pipe(inject(series(appstreamJS), { ignorePath: 'dev/', }))
        .pipe(gulp.dest('dev/'))
});

gulp.task('watch:dev', function() {
    gulp.watch('app/css/*.css', ['compile:app-css'])
    gulp.watch('app/js/**/*.js', ['compile:app-js']);
    gulp.watch('app/partials/**/*.html', ['compile:dev:partials'])
})

gulp.task('serve:dev', function(cb) {
    runSequence('dev:cleanfolder', 'dev-inject', 'watch:dev', 'browser-sync-dev', cb);
});

/// Prod Build


gulp.task('compile:prod:css', function() {
    return gulp.src(appCSS)
        .pipe(plumber())
        .pipe(concat('agrostar.web.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rev())
        .pipe(gulp.dest('build/style/'))
})


gulp.task('compile:prod:app-js', function() {
    return gulp.src(appJS)
        .pipe(concat('agrostar.app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify().on('error', gutil.log))
        .pipe(rev())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/js/'))
});

gulp.task('compile:prod:partials', function() {
    return gulp.src('app/partials/**/*.html')
        .pipe(gulp.dest('build/partials/'))
});

gulp.task('compile:prod:images', function() {
    return gulp.src('app/images/*')
        .pipe(gulp.dest('build/images/'));
});

gulp.task('compile:prod', ['compile:prod:app-js', 'compile:prod:css', 'compile:prod:partials', 'compile:prod:images']);

gulp.task('prod-inject', ['compile:prod'], function() {
    var target = gulp.src('./app/index.html');
    var appcss = gulp.src(['./build/style/*.web.css'], { read: false });

    var appstreamJS = gulp.src(['./build/**/*.app.*.js'], { read: false });

    return target.pipe(inject(series(appcss), { ignorePath: 'build/', }))
        .pipe(inject(series(appstreamJS), { ignorePath: 'build/', }))
        .pipe(gulp.dest('build/'))
});

gulp.task('prod-compile:static-css', function() {
    return gulp.src(staticCSS)
        .pipe(plumber())
        .pipe(gulp.dest('build/style/'))
        .pipe(reload({ stream: true }));
});

gulp.task('build:prod', function(cb) {
    runSequence('prod:cleanfolder', 'prod-inject', 'prod-compile:static-css', cb);
});

gulp.task('dev:cleanfolder', function() {
    return del([
        devBuild + '**'
    ]);
});

gulp.task('prod:cleanfolder', function() {
    return del([
        prodBuild + '**'
    ]);
});
