import angular from 'angular';

import uiRouter from 'angular-ui-router';

import commonModule from './common/module';
import repModule from './representative/module';

import templatesModule from "jsa:templates";
import styles from "jsa:styles";

let moduleName = "jsa";

let appModule = angular.module(moduleName, [
	
	'ui.router',
	
	commonModule.name,
	repModule.name,
	'jsa.templates'])
	
	.config(config);
	
function config($locationProvider) {
	"ngInject";
	$locationProvider.html5Mode(true).hashPrefix('!');
}

angular.element(document).ready(() => {
	angular.bootstrap(document, [appModule.name], { strictDI: true });
});