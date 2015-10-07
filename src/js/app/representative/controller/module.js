import angular from 'angular';

import repServiceModule from 'jsa:repService';

import RepIndexController from './repIndex';

let moduleName = 'jsa.representative.controllers';

let controllerModule = angular.module(moduleName, [
	
	repServiceModule.name])

	.controller(RepIndexController.name, RepIndexController.controller)
	
	.config(config);
	
export default controllerModule;
	
function config($stateProvider) {
	"ngInject";
	
}