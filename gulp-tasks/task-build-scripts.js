let gulp 			= require('gulp'),
	Builder			= require('systemjs-builder'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	utils			= require('./build-utils'),
	log				= require('./build-utils').log,
	errorHandler	= require(',/build-utils').errorHandler,
	config			= require('./build-config');
	
gulp.task('build-scripts', [], function () {
	if (utils.buildDev) {
		
	} else {
		
	}
});

gulp.task('build-scripts', [], function () {
	let builder = new Builder('/', './config.js');
	
	return builder.bundle(
		config.app.module.app, 
		config.dir.public + config.file.bundle.app, 
		config.bundleOptions)
		
		.then(function () {
		})
		
		.catch(function (err) {
			log(`Error : ${err}`);
		});
});