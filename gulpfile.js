var gulp = require('gulp'),
	uglify = require('gulp-uglify');

	apref = require('gulp-autoprefixer');
	csslint = require('gulp-csslint');
	cssConcat = require('gulp-concat-css');

	jshint = require('gulp-jshint');
	webpack = require('webpack-stream');
	webpackConfig = require("./webpack.config.js");

	browserSync = require('browser-sync').create();

gulp.task('minify', function() {
	gulp.src('js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('pages'));
});

gulp.task('jscheck', function() {
	gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('pack', function() {
	gulp.src('js/app.js')
		.pipe( webpack(webpackConfig) )
		.pipe(gulp.dest('pages'));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'pages'
		},
	});
});

gulp.task('js', function() {
	gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe( webpack(webpackConfig) )
		.pipe(gulp.dest('pages'))
		.pipe(browserSync.reload({
      			stream: true
    		}))
});

gulp.task('css', function() {
	gulp.src('css/*.css')
		//.pipe(csslint())
		//.pipe(csslint.reporter())
		.pipe(cssConcat('index.css'))
		.pipe(apref({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('pages'))
		.pipe(browserSync.reload({
      			stream: true
    		}));
});

gulp.task('watch', ['browserSync', 'js', 'css'], function() {
	gulp.watch('js/*.js', ['js']);
	gulp.watch('css/*.css', ['css']);
	gulp.watch('pages/*.html', browserSync.reload)
});