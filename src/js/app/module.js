import angular from 'angular';

import uiRouter from 'angular-ui-router';

import repModule from './representative/module';

let moduleName = "jsa";

let appModule = angular.module(moduleName, [
	
	'ui.router',
	repModule.name])
	
	.config(config);
	
function config($locationProvider) {
	"ngInject";
	$locationProvider.html5Mode(true).hashPrefix('!');
}

angular.element(document).ready(() => {
	angular.bootstrap(document, [appModule.name], { strictDI: true });
});