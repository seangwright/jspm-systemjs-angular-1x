function RepDetailController(repManager) {
	"ngInject";
	let vm = this;
	
	console.log(repManager.url);
}

export default { controller: RepDetailController, name: 'RepDetailController' };