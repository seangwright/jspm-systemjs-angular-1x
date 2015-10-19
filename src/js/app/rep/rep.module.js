import angular from 'angular';

import controllerModule from './controller/rep.controller.module.js';
import serviceModule from './service/rep.service.module.js';

let moduleName = 'jsa.rep';

let repModule = angular.module(moduleName, [
	
	controllerModule.name,
	serviceModule.name]);
	
export default repModule;