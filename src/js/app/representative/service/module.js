import angular from 'angular';

import repManagerService from './repManager';

let moduleName = 'jsa.representative.service';

let repServiceModule = angular.module(moduleName, [])
	
	.service(repManagerService.name, repManagerService.service);
	
export default repServiceModule;