import angular from 'angular';

import controllerModule from './controller/module';
import serviceModule from './service/module';

let moduleName = 'jsa.representative';

let repModule = angular.module(moduleName, [
	
	controllerModule.name,
	serviceModule.name]);
	
export default repModule;