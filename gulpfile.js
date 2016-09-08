// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss'); // Vertical Rhythm
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var marked = require('marked');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  scripts: ['assets/js/*.js', 'node_modules/marked/lib/marked.js'],
  images: 'assets/img/**/*'
};

// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del(['build']);
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "localhost"
    });
    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("index.php").on('change', browserSync.reload);
});

// Compile Our Sass

gulp.task('sass', function () {
  gulp.src('./assets/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe( postcss([
    			require('autoprefixer')
    		]) 
    	)
    .pipe(cssnano())
    .pipe(gulp.dest(''))
    .pipe(browserSync.stream());
});

// Marked for Markdown
var preserveFirstComment = function() {
  var set = false;

  return function() {
     if (set) return false;
     set = true;
     return true;
  };
};

// Concatenate & Minify JS
gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify({preserveComments: preserveFirstComment()}))
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});
//

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['lint', 'scripts']);
    gulp.watch('assets/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'serve']);