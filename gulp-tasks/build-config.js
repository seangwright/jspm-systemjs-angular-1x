'use strict';

let path		= require('path'),
	argv		= require('yargs').argv;
	
let app = {
	module: {
		app: '[app/**/*.js]',
		template: 'jsa:templates - angular',
		vendor: 'app/module - [app/**/*.js] - jsa:templates + angular'
	}
};

let build = {
	envs: {
		dev: 'dev',
		prod: 'prod'
	},
	environment: argv.env || 'dev',
	vendor: argv.vendor || false,
	templates: argv.templates || false
}

let dir = {
	public: './public/',
	src: './src/',
	app: './src/js/app/',
	jspm_packages: './jspm_packages/'		
};

let file = {
	bundle: {
		app: 'jsa.js',
		vendor: 'vendor.js',
		template: 'templates.js',
	},
	systemJs: {
		systemJs: 'system.js',
		config: 'config.js'
	},
	index: 'index.html'
};

let setting = {
	templateCache: {
		module: 'jsa.templates',
		moduleSystem: 'ES6',
		standalone: true
	},
	minifyHtml: {
		empty: true
	},
	ngAnnotate: {
		remove: true,
		add: true,
		single_quotes: true
	},
	sourceMaps: { 
		init: {
			loadMaps: true,
			debug: true
		},
		write: {
			includeContent: true,
			debug: true
		}
	},
	bundleOptions: {
		minify: false, 
		sourceMaps: 'inline'
	}
};

module.exports = {
	app: app,
	dir: dir,
	file: file,
	setting: setting,
	build: build
};