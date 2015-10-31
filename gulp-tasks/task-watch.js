'use strict';

let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	DevBuilder		= require('jspm-dev-builder'),
	jspm			= require('jspm'),
	util			= require('util'),
	path			= require('path'),

	config			= require('./build-config'),
	buildScripts	= require('./task-build-scripts'),
	log				= require('./build-utils').log;

gulp.task('build-watch', [], function () {
	let appBuilder = new DevBuilder({
		jspm: jspm, // so you can use your local version of jspm
		expression: config.app.module.app, // path to your app's entry point
		outLoc: config.dir.public + config.file.bundle.app, // where you want the output file
		logPrefix: 'jspm-app', // put at the beginning of log messages from dev builder
		buildOptions: config.setting.bundleOptions
	});

	let vendorBuilder = new DevBuilder({
		jspm: jspm, // so you can use your local version of jspm
		expression: config.app.module.vendor, // path to your app's entry point
		outLoc: config.dir.public + config.file.bundle.vendor, // where you want the output file
		logPrefix: 'jspm-vendor', // put at the beginning of log messages from dev builder
		buildOptions: config.setting.bundleOptions
	});

	gulp.watch('src/css/**/*', ['build-styles']);
	gulp.watch('src/index.html', ['build-files:index']);
	gulp.watch('config.js', ['build-files:config']);

	$.watch(config.dir.app + '**/*.js', function (vinyl) {
		appBuilder.build(`${config.dir.app}${vinyl.relative}`)
			.then(function success(builder) {
				buildScripts.scriptsAnnotate();
			});
	});

	gulp.watch(config.dir.app + '**/*.html', ['build-scripts:templates']);

	$.watch(config.dir.jspm_packages + '**/*.js', function (vinyl) {
		vendorBuilder.build(`${config.dir.jspm_packages}${vinyl.relative}`)
			.then(function success(builder) {
			});
	});
});