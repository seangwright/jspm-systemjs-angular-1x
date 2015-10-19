'use strict';

let gulp			= require('gulp'),
	Builder			= require('systemjs-builder'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	utils			= require('./build-utils'),
	config			= require('./build-config');
	
gulp.task('build-styles', ['build-styles:bundle-styles'], function (done) {
	return done();
});

gulp.task('build-styles:bundle-styles', [], function () {
	if (utils.bundleStyles()) {
		log(`Starting bundling of ${config.file.bundle.style} in ${config.dir.styles}`);
		let builder = new Builder('/', './config.js');
		
		return builder.bundle(
			config.app.module.style, 
			config.dir.public + config.file.bundle.style, 
			{ minify: true, sourceMaps: false })
			
			.then(function () {
				log(`Completed bundle ${config.file.bundle.style} in ${config.dir.public}`);
				return;
			})
			
			.catch(function (err) {
				log(`Error : ${err}`);
			});
	}
});