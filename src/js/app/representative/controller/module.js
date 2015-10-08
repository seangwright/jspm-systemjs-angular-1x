import angular from 'angular';

import repServiceModule from 'jsa:repService';

import RepIndexController from './repIndex';

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
		.state('state1', {
			url: "/state1",
			templateUrl: "partials/state1.html"
		})
		.state('state1.list', {
			url: "/list",
			templateUrl: "partials/state1.list.html",
			controller: function ($scope) {
				$scope.items = ["A", "List", "Of", "Items"];
			}
		})
		.state('state2', {
			url: "/state2",
			templateUrl: "partials/state2.html"
		})
		.state('state2.list', {
			url: "/list",
			templateUrl: "partials/state2.list.html",
			controller: function ($scope) {
				$scope.things = ["A", "Set", "Of", "Things"];
			}
		});
}