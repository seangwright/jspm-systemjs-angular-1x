'use strict';

let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	DevBuilder		= require('jspm-dev-builder'),
	jspm			= require('jspm'),

	config			= require('./build-config'),
	buildScripts	= require('./task-build-scripts'),
	utils				= require('./build-utils');

gulp.task('build-watch', [], function () {
	if (utils.bundleApp()) {
		utils.log(`Watching ${config.dir.app}'**/*.js'`);
		let appBuilder = new DevBuilder({
			jspm: jspm, // so you can use your local version of jspm
			expression: config.app.module.app, // path to your app's entry point
			outLoc: config.dir.public + config.file.bundle.app, // where you want the output file
			logPrefix: 'jspm-app', // put at the beginning of log messages from dev builder
			buildOptions: config.setting.bundleOptions
		});
		$.watch(config.dir.app + '**/*.js', function (vinyl) {
			appBuilder.build(`${config.dir.app}${vinyl.relative}`)
				.then(function success(builder) {
					buildScripts.scriptsAnnotate();
				});
		});
	}
	
	if (utils.bundleVendor()) {
		utils.log(`Watching ${config.dir.vendor}'**/*.js'`);
		let vendorBuilder = new DevBuilder({
			jspm: jspm, // so you can use your local version of jspm
			expression: config.app.module.vendor, // path to your app's entry point
			outLoc: config.dir.public + config.file.bundle.vendor, // where you want the output file
			logPrefix: 'jspm-vendor', // put at the beginning of log messages from dev builder
			buildOptions: config.setting.bundleOptions
		});
		$.watch(config.dir.jspm_packages + '**/*.js', function (vinyl) {
			vendorBuilder.build(`${config.dir.jspm_packages}${vinyl.relative}`)
				.then(function success(builder) {
				});
		});
	}

	if (utils.bundleStyles()) {
		utils.log(`Watching ${config.dir.styles}'**/*.css'`);
		gulp.watch(config.dir.styles + '**/*.css', ['build-styles']);
	}
	
	if (utils.bundleTemplates()) {
		utils.log(`Watching ${config.dir.app}'**/*.html'`);
		gulp.watch(config.dir.app + '**/*.html', ['build-scripts:templates']);
	}
	
	if (utils.buildDev()) {
		utils.log(`Watching src/index.html`);
		gulp.watch('src/index.html', ['build-files:index']);
		
		utils.log(`Watching config.js`);
		gulp.watch('config.js', ['build-files:config']);
	}
});