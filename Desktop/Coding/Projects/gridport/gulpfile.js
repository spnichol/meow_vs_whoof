var gulp = require ('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');





gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(concat('styles.scss'))
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./css/'))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))


});



gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
	})
})

gulp.task('useref', function() {
	return gulp.src('*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
	return gulp.src('images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images')) 
});

gulp.task('fonts', function() {
  return gulp.src('fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('build', function(callback) {
	runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'],
		callback
	)
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})