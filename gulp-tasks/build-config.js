'use strict';

let path		= require('path'),
	argv		= require('yargs').argv;
	
let app = {
	module: {
		app: '[app/**/*.js]',
		template: 'jsa:templates - angular',
		vendor: 'app/jsa.module.js - [app/**/*.js] - jsa:templates - jsa:styles-adapter + angular + bootstrap',
		style: 'jsa:styles-adapter - bootstrap'
	},
	envs: {
		dev: 'dev',
		prod: 'prod'
	}
};

let build = {
	environment: argv.env || 'dev',
	app: argv.app || argv.dev || false,
	vendor: argv.vendor || argv.dev || false,
	templates: argv.templates || argv.dev || false,
	styles: argv.styles || argv.dev || false,
};

let dir = {
	public: './public/',
	src: './src/',
	app: './src/js/app/',
	styles: './src/js/styles/',
	jspm_packages: './jspm_packages/',
			
};

let file = {
	bundle: {
		app: 'jsa.js',
		vendor: 'vendor.js',
		template: 'templates.js',
		style: 'styles.js'
	},
	systemJs: {
		systemJs: 'system.js',
		config: 'config.js'
	},
	index: 'index.html',
	favicon: 'favicon.ico'
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
			debug: false
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