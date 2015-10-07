
var gulp 			= require('gulp'),
	args 			= require('yargs').argv,
	$ 				= require('gulp-load-plugins')({ lazy: true }),

	config 			= require('./build-config'),
	log 			= require('./build-utils').log,
	errorHandler 	= require('./build-utils').errorHandler;

///
/// Bumps the version in package.json to the version specified by the --ver & --type command line options
///	see https://www.npmjs.com/package/gulp-bump
///
gulp.task('bump', function () {
	var msg = 'Bumping versions';
	var type = args.type;
	var version = args.ver;
	var options = {};

	if (version) {
		options.version = version;
		msg += ' to ' + version;
	} else {
		options.type = type;
		msg += ' for a ' + type;
	}
	log(msg);

	return gulp
		.src(config.file.package)
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe($.print())
		.pipe($.bump(options))
		.pipe(gulp.dest(config.dir.root));
});

gulp.task('default', ['help'], function () { });

gulp.task('help', $.taskListing);