var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber     = require('gulp-plumber');
var util = require('gulp-util')
var wait = require('gulp-wait');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var babili = require('gulp-babel-minify');

var notify    = require('gulp-notify');

var strip     = require('gulp-strip-comments');
var htmlreplace   = require('gulp-html-replace');

//==================================================

//================
//=== browserSync
//================

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

//==================
// SASS compilation 
//==================

gulp.task('sass', () => {
  return gulp.src([
    'app/scss/**/*.scss'
    ])
  .pipe(wait(200))
    .pipe(plumber(errorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true,
        // outputStyle: 'compressed',
        // outputStyle: 'compact',
        outputStyle: 'nested',
        // outputStyle: 'expanded',
        precision: 10
      }).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 4 versions']
              }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    // .pipe( notify( { message: 'TASK: "styles" Completed! 💯', onLast: true } ) )
    .pipe(browserSync.reload({
      stream: true
    }))
});

//ERROR 

function errorHandler(error) {
  util.beep();
  notify.onError('Error: <%= error.message %>');
  // console.log('');
}

//===========================
//     Images optimalization
//===========================

gulp.task('images', () => {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

//================
//   SVG sprite 
//================

// gulp.task('svg', () => {
//   return gulp.src('dev/svg/*.svg')
//     .pipe(rename({ prefix: 'icon-'}))
//     // .pipe(svgmin())
//     .pipe(svgstore())
//     .pipe(cheerio({
//       parserOptions: { xmlMode: true }
//     }))
//     .pipe(rename('sprites.svg'))
//     .pipe(gulp.dest('images'));
// })

//================
//      Fonts 
//================

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html').on('change', reload);
  gulp.watch('app/js/**/*.js').on('change', reload);
});

gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//================
// Minify Scripts
//================

gulp.task('scripts', () => {
  return gulp.src([
    'app/js/*.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
  .on('error', function (err) {
     gutil.log(gutil.colors.red('[Error]'), err.toString());
   })
  .pipe(gulp.dest('dist/js'));
})

//=========================
// CHANGE FILES SRC + Min
//=========================

// gulp.task('useref', () => {
//   return gulp.src('src/*.php')
//     .pipe(htmlreplace({
//       'css': 'main.min.css',
//       'js': 'js/main.min.js'
//     }))
//     .pipe(useref())
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// });

gulp.task('clean:dist', () => {
  return del.sync('dist');
})

gulp.task('default', function (callback) {
  runSequence(['watch', 'sass', 'browserSync'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['default', 'images', 'fonts'], 'useref', 'scripts',
    callback)
})