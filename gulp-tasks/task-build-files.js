'use strict';

let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	utils			= require('./build-utils'),
	config			= require('./build-config');
	
gulp.task('build-files', ['build-files:index', 'build-files:config', 'build-files:systemjs'], function (done) {
	return done();
});

gulp.task('build-files:index', [], function () {
	log(`Copying ${config.file.index} to ${config.dir.public}`);
	
	return gulp.src(config.dir.src + config.file.index)
	
	.pipe($.plumber({ handleError: errorHandler }))
	.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:config', [], function () {
	log(`Copying ${config.file.systemJs.config} to ${config.dir.public}`);
	
	return gulp.src(config.file.systemJs.config)
	
	.pipe($.plumber({ handleError: errorHandler }))
	.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:systemjs', [], function () {
	
	return gulp.src(config.dir.jspm_packages + config.file.systemJs.systemJs)
	
	.pipe($.plumber({ handleError: errorHandler }))
	.pipe(gulp.dest(config.dir.public));
});