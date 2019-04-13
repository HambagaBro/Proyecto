var controllerhotel = require('./controllerhotel.js');
var controlleradministrador = require('./controlleradministrador.js')
var controllerusuario = require('./controllerusuario.js')
module.exports = function(app) {

	var clasehotel = new controllerhotel();
	app.post('/api/nuevohotel',clasehotel.Guardar)
	app.post('/api/seleccionahotel', clasehotel.Seleccionartodos)
	app.post('/api/seleccionartodos', clasehotel.Seleccionartodos)

	var claseusa = new controllerusuario();
	app.post('/api/nuevousa', claseusa.Guardar);
	app.post('/api/loginusa', claseusa.Login);
	
	app.get('*', function(req,res){
		res.sendfile('./login2.html');
	});

	var claseadm = new controlleradministrador();
	app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);
	
	app.get('*', function(req,res){
		res.sendfile('./login.html');
	});
};