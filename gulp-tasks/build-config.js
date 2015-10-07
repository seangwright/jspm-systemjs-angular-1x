let path		= require('path'),
	argv		= require('yargs').argv;
	
let app = {
	module: {
		app: '[app/**/*]',
		template: 'app:templates',
		vendor: 'app/app.js - [app/**/*]'
	}
};

let dir = {
	public: 'public/',
	src: 'src/',
	app: 'src/js/app/',
	jspm_packages: 'jspm_packages/'		
};

let file = {
	bundle: {
		app: 'app.js',
		vendor: 'vendor.js',
		template: 'templates.js',
	},
	systemJs: {
		systemJs: 'system.js',
		config: 'config.js'
	}
};

let settings = {
	
};

module.exports = {
	app: app,
	dir: dir,
	file: file,
	settings: settings
};