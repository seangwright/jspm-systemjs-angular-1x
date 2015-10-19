import angular from 'angular';

import repManagerService from './rep.service.repManager.js';

let moduleName = 'jsa.rep.service';

let repServiceModule = angular.module(moduleName, [])
	
	.service(repManagerService.name, repManagerService.service);
	
export default repServiceModule;