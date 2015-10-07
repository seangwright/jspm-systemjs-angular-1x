let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	utils			= require('./build-utils'),
	config			= require('./build-config');
	
gulp.task('build-files', ['build-files:index', 'build-files:systemjs'], function (done) {
	return done();
});

gulp.task('build-files:index', [], function () {
	log(`Copying ${config.file.index} to ${config.dir.public}`);
});