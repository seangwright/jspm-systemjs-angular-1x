'use strict';

let gulp		= require('gulp'),
	runSequence	= require('run-sequence');
	
gulp.task('build', function(done) {
	runSequence(
		['build-scripts', 'build-styles', 'build-files'],
		done);
});