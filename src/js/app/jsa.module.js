import angular from 'angular';

import uiRouter from 'angular-ui-router';

import commonModule from './common/common.module.js';
import homeModule from './home/home.module.js';
import repModule from './rep/rep.module.js';

import templatesModule from "jsa:templates";
import styles from "jsa:styles";

let moduleName = "jsa";

let appModule = angular.module(moduleName, [
	
	'ui.router',
	
	commonModule.name,
	homeModule.name,
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