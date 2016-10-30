var cache = require('gulp-cache'),
    cssnano = require('gulp-cssnano'), 
    del = require('del'),
    gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    ngAnnotate = require('gulp-ng-annotate'),
    runSequence = require('run-sequence'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify');

gulp.task('useref', function() {
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('viewChange', function() {
  return gulp.src('views/*.html')
    .pipe(gulp.dest('dist/views'));
});

gulp.task('dataFileChange', function() {
  return gulp.src('data/*.json')
    .pipe(gulp.dest('dist/data'));
});

gulp.task('uglifyApp', function() {
  gulp.src('dist/js/app.min.js')
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('php', function() {
  gulp.src('php/*.php')
    .pipe(gulp.dest('dist/php'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('images', function() {
  return gulp.src('images/*+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({interlaced: true})))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['useref'])
  gulp.watch('data/*.json', ['dataFileChange'])
  gulp.watch('js/**/*.js', ['useref'])
  gulp.watch('js/app.js', ['useref'])
  gulp.watch('views/*.html', ['viewChange'])
  gulp.watch('images', ['images'])
  gulp.watch('php/*.php', ['php'])
});

gulp.task('build-app', function(callback) {
  runSequence('clean:dist',
    ['useref', 'viewChange','dataFileChange', 'php', 'images'],
    'uglifyApp',
    callback
  )
});