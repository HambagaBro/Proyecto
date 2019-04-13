var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var usa = new Schema({
	NOMBRE: String,
	CLAVE: String,
	EMAIL: String,
	IMAGEN: String,
	SALT: String,
});

usa.methods.setPassword = function(password) {
	console.log(password);

	let salt= crypto.randomBytes(16).toString('hex');
	console.log(password);
	let claveysalt= [];
	claveysalt.push(crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex'));
	claveysalt.push(salt);

	return claveysalt;
};
usa.methods.validPassword= function(password,clavebuena,salt) {
	console.log(this.CLAVE);
	console.log(password);
	console.log(clavebuena);

	let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return clavebuena === hash;
};
module.exports = mongoose.model('Usuario',usa);
