import angular from 'angular';

import controllerModule from './controller/module';

let moduleName = 'jsa.common';

let commonModule = angular.module(moduleName, [
	
	controllerModule.name]);
	
export default commonModule;