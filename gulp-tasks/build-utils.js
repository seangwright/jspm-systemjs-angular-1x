let del		= require('del'),
	$		= require('gulp-load-plugins')({ lazy: true }),
	config	= require('./build-config');
	
module.exports = {
	log: 			log,
	clean: 			clean,
	errorHandler:	errorHandler,
	buildDev:		buildDev
};

function log(msg, error) {
	let color = error ? 'red' : 'blue';
	
	if (typeof msg === 'object') {
		for (let item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors[color](msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors[color](msg));
	}
}

function clean(path, done) {
	log(`Cleaning: ${$.util.colors.blue(path)}`);
	
	return del(path, done);
}

function errorHandler(error) {
	log(error, true);
	
	this.emit('end');
	
}

function buildDev() {
	
}