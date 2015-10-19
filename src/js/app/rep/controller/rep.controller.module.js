import angular from 'angular';

import repServiceModule from 'jsa:repService';

import RepDetailController from './rep.controller.detail.js';
import RepIndexController from './rep.controller.index.js';

let moduleName = 'jsa.rep.controller';

let controllerModule = angular.module(moduleName, [

	repServiceModule.name])

	.controller(RepIndexController.name, RepIndexController.controller)

	.config(config);

export default controllerModule;

function config($stateProvider, $urlRouterProvider) {
	"ngInject";

	// Now set up the states
	$stateProvider
		.state('repIndex', {
			url: "/representatives",
			templateUrl: "rep/controller/rep.controller.index.html",
			controller: RepIndexController.name,
			controllerAs: 'vm'
		})
		.state('repIndex.detail', {
			url: "/representatives/detail/",
			templateUrl: "representative/controller/rep.controller.index.detail.html",
			controller: RepIndexController.name,
			controllerAs: 'vm'
		})
		.state('repDetail', {
			url: "/representatives/{id}/detail",
			templateUrl: "/representative/rep.controller.detail.html",
			controller: RepDetailController.name,
			controllerAs: 'vm'
		});
}