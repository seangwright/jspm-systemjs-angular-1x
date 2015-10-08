'use strict';

let gulp 			= require('gulp'),
	Builder			= require('systemjs-builder'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	utils			= require('./build-utils'),
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	config			= require('./build-config');
	
gulp.task('build-scripts', ['build-scripts:app', 'build-scripts:vendor'], function () {
	log('Building scripts ...');
});

gulp.task('build-scripts:app', ['build-scripts:ng-annotate'], function (done) {
	return done();
});

gulp.task('build-scripts:vendor', ['build-scripts:bundle-vendor'], function (done) {
	return done();
});

gulp.task('build-scripts:templates', ['build-scripts:bundle-template'], function (done) {
	return done();
});

gulp.task('build-scripts:ng-annotate', ['build-scripts:bundle-app'], function () {
	log(`Angular-annotating ${config.file.bundle.app} in ${config.dir.public}`);
	
	return gulp.src(config.dir.public + config.file.bundle.app)
	
	.pipe($.plumber({ handleError: errorHandler }))
	.pipe($.if(utils.buildDev(), $.sourcemaps.init(config.setting.sourceMaps.init)))
	.pipe($.ngAnnotate(config.setting.ngAnnotate))
	.pipe($.if(utils.buildDev(), $.sourcemaps.write(config.setting.sourceMaps.write)))
	
	.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-scripts:bundle-app', [], function () {
	log(`Starting bundling of ${config.file.bundle.app} in ${config.dir.public}`);
	let builder = new Builder('/', './config.js');
	
	return builder.bundle(
		config.app.module.app, 
		config.dir.public + config.file.bundle.app, 
		config.setting.bundleOptions)
		
		.then(function () {
			log(`Completed bundle ${config.file.bundle.app} in ${config.dir.public}`);
			return;
		})
		
		.catch(function (err) {
			log(`Error : ${err}`);
		});
});

gulp.task('build-scripts:bundle-vendor', ['build-scripts:templates'], function () {
	if (utils.bundleVendor()) {
		log(`Starting bundling of ${config.file.bundle.vendor} in ${config.dir.public}`);
		let builder = new Builder('/', './config.js');
		
		return builder.bundle(
			config.app.module.vendor, 
			config.dir.public + config.file.bundle.vendor, 
			config.setting.bundleOptions)
			
			.then(function () {
				log(`Completed bundle ${config.file.bundle.vendor} in ${config.dir.public}`);
				return;
			})
			
			.catch(function (err) {
				log(`Error : ${err}`);
			});
	}
});

gulp.task('build-scripts:bundle-template', ['build-scripts:template-cache'], function () {
	if (utils.bundleTemplates()) {
		log(`Starting bundling of ${config.file.bundle.template} in ${config.dir.public}`);
		let builder = new Builder('/', './config.js');
		
		return builder.bundle(
			config.app.module.template, 
			config.dir.public + config.file.bundle.template, 
			{ minify: true, sourceMaps: false })
			
			.then(function () {
				log(`Completed bundle ${config.file.bundle.template} in ${config.dir.public}`);
				return;
			})
			
			.catch(function (err) {
				log(`Error : ${err}`);
			});
	}
});

gulp.task('build-scripts:template-cache', [], function () {
	log(`Building template cache into angular module ${config.file.bundle.template} in ${config.dir.public}`);
	
	return gulp.src(config.dir.app + '**/*.html')
	
	.pipe($.plumber({ handleError: errorHandler }))
	.pipe($.minifyHtml(config.setting.minifyHtml))
	.pipe($.angularTemplatecache(config.file.bundle.template, config.setting.templateCache))
	
	.pipe(gulp.dest(config.dir.public));
});