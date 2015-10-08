import angular from 'angular';

let moduleName = 'jsa.common.controller';

let controllerModule = angular.module(moduleName, [])

	.config(config);

export default controllerModule;

function config($stateProvider, $urlRouterProvider) {
	"ngInject";
	
	// For any unmatched url, redirect to /representatives
	$urlRouterProvider.otherwise("/representatives");
}