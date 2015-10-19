import angular from 'angular';

import HomeMainController from './home.controller.main.js';

let moduleName = 'jsa.home.controller';

let controllerModule = angular.module(moduleName, [])

	.controller(HomeMainController.name, HomeMainController.controller)

	.config(config);

export default controllerModule;

function config($stateProvider, $urlRouterProvider) {
	"ngInject";

	// Now set up the states
	$stateProvider
		.state('homeMain', {
			url: "/home",
			templateUrl: "home/controller/home.controller.main.html",
			controller: HomeMainController.name,
			controllerAs: 'vm'
		});
}