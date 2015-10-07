function repManager($http) {
	let service = {};
	
	let url = 'http://www.opensecrets.org/api/?method=getLegislators&id=OH&output=json&apikey=20dab648dc6e45f584daa49fac506fa6';
}

export default { service: repManager, name: 'repManager' };