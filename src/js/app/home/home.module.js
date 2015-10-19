import angular from 'angular';

import controllerModule from './controller/home.controller.module.js';

let moduleName = 'jsa.home';

let homeModule = angular.module(moduleName, [
	
	controllerModule.name]);
	
export default homeModule;