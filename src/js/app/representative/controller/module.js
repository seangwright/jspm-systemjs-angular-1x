import angular from 'angular';

import repServiceModule from 'jsa:repService';

import RepDetailController from './detail/controller';
import RepIndexController from './index/controller';

let moduleName = 'jsa.representative.controller';

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
			templateUrl: "representative/controller/index/template.html",
			controller: RepIndexController.name,
			controllerAs: 'vm'
		})
		.state('repIndex.detail', {
			url: "/representatives/detail/",
			templateUrl: "representative/controller/index/template.detail.html",
			controller: RepIndexController.name,
			controllerAs: 'vm'
		})
		.state('repDetail', {
			url: "/representatives/{id}/detail",
			templateUrl: "/representative/controller/detail/template.html",
			controller: RepDetailController.name,
			controllerAs: 'vm'
		});
}