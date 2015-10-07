import angular from 'angular';

let moduleName = "jspm-systemjs-angular";

let appModule = angular.module(moduleName, [])
	
	.config(config);
	
function config($locationProvider) {
	"ngInject";
	$locationProvider.html5Mode(true).hashPrefix('!');
}

angular.element(document).ready(() => {
	angular.bootstrap(document, [appModule.name], { strictDI: true });
});