var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber     = require('gulp-plumber');
var wait = require('gulp-wait');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var useref = require('gulp-useref');
var gulpIf = require('gulp-if');

var cleanCSS = require('gulp-clean-css');

var rename = require('gulp-rename');

var htmlmin = require('gulp-htmlmin');

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
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
      baseDir: 'src'
    },
  });
});

//==================
// SASS compilation 
//==================

gulp.task('sass', () => {
  return gulp.src([
    'src/scss/**/*.scss'
    ])
  // .pipe(wait(200))
    .pipe(plumber({
      errorHandler: handleError
    }))
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
    .pipe(gulp.dest('src/css'))
    .pipe( notify( { message: 'TASK: "styles" Completed! 💯', onLast: true } ) )
    .pipe(browserSync.reload({
      stream: true
    }))
});

//ERROR 

var handleError = function(err) {
    // gutil.beep();
    console.log(err.toString());
    this.emit('end');
}

//===========================
//     Images optimalization
//===========================

gulp.task('images', () => {
  return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
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
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/*.html').on('change', reload);
  gulp.watch('src/js/**/*.js').on('change', reload);
});

// gulp.task('useref', () => {
//   return gulp.src('src/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('css/*.css', cssnano()))
//     .pipe(gulp.dest('/dist'))
// });

//================
// Minify Scripts
//================

gulp.task('scripts', () => {
  return gulp.src([
    'src/js/owl.carousel.js',
    'src/js/smooth-scroll.js',
    'src/js/script.js',
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

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlreplace({
      'css': 'css/main.min.css',
      'js': 'js/main.min.js'
    }))
    .pipe(htmlmin({
      // collapseWhitespace: true,
       removeComments: true
    }))
    // .pipe(useref())
    // .pipe(gulpIf('src/*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//=========================
// Styles Minification
//=========================

gulp.task('styles', () => {
  return gulp.src('src/css/*.css')
      .pipe(cleanCSS({rebase: false}))
      // .pipe(cssmin())
      .pipe(rename('main.min.css'))
      .pipe(gulp.dest('dist/css'));
});



gulp.task('clean:dist', () => {
  return del.sync('dist');
})

gulp.task('default', (callback) => {
  runSequence(['watch', 'sass', 'browserSync'],
    callback
  )
})

gulp.task('build', (callback) => {
  runSequence('clean:dist', ['default', 'images', 'fonts', 'styles', 'html', 'scripts'],
    callback)
})