function RepIndexController(repManager) {
	"ngInject";
	let vm = this;
	
	console.log(repManager.url);
}

export default { controller: RepIndexController, name: 'RepIndexController' };