var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('scripts', function () {
  var src = ['www/src/modules/*.js', 'www/src/services/*.js', 'www/src/directives/*.js']
  gulp.src(src)
          .pipe(concat('angular-z-pack.js'))
          .pipe(gulp.dest('dist'))
  gulp.src(src)   // order matters
          .pipe(sourcemaps.init())
          .pipe(ngAnnotate())
          .pipe(concat('angular-z-pack.min.js'))
          .pipe(uglify())
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest('dist'))
  gulp.src('www/src/directives/*.html')
          .pipe(gulp.dest('dist/directives'))
  gulp.src('www/src/css/*')
          .pipe(gulp.dest('dist/css'))
})

gulp.task('styles', function () {
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['scripts'])
})

gulp.task('default', ['scripts', 'styles'])


// gulp scripts


