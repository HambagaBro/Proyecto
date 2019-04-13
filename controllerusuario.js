var Item= require ('./usuario');
let usuarioinstanciado = new Item();
module.exports = class _Usuario { 
	constructor ( ) { }

Guardar(req,res) { 
	console.log(req);
	var claveysaltlocal = usuarioinstanciado.setPassword(req.body._CLAVE);
	console.log(claveysaltlocal[0]);
	console.log(req.body._CLAVE);
	Item.create(
		{ 
	NOMBRE: req.body._NOMBRE,
	CLAVE: claveysaltlocal[0],
	EMAIL: req.body._EMAIL,
	IMAGEN: req.body._IMAGEN,
	SALT: claveysaltlocal[1]
	},
	function(err, item) { 
		if (err){ 
			res.send(err);}
			else{ Item.find(function(err, item){ 
				if (err)
					res.send(err)
				res.json(item);
			});}}); }



Login(req,res) { 
	console.log(req.body);
	Item.find({EMAIL:req.body._EMAIL}, {CLAVE:req.body._CLAVE}, function(err, item) { 
		console.log('entro');
		if (err){ 
			res.send(err)}

			else{ 
				if(item.length ==0)
					{ 
						console.log('email no existe en la bd');
						res.status(400).send({ 
						message : "Datos incorrectos" });
						}
					else{

						console.log(item[0].CLAVE);
						if(administradorinstanciado.validPassword(req.body._CLAVE,item[0].SALT))
							{ 
								item[0].SALT="NO WAY!";
								res.json(item);
							}
							else{ 
								res.status(400).send({ 
								message : "Datos incorrectos"
								});
							}}
						}
					});}
}

					