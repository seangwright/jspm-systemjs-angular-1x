'use strict';

let gulp 			= require('gulp'),
	args 			= require('yargs').argv,
	$ 				= require('gulp-load-plugins')({ lazy: true }),

	config 			= require('./build-config'),
	log 			= require('./build-utils').log;

gulp.task('watch', [], function () {
	log(`Watching files in 'src/js/app/**/*.js', 'src/js/app/**/*.html, 'src/index.html' and 'jspm_packages/**/*.js'`);
	
	gulp.watch(config.dir.app + '**/*.js', ['build-scripts:app']);
	gulp.watch(config.dir.app + '**/*.html', ['build-scripts:templates']);
	gulp.watch(config.dir.src + 'index.html', ['build-files:index']);
	gulp.watch(config.dir.jspm_packages + '**/*.js', ['build-scripts:vendor']);
});