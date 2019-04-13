var Item = require ('./hotel');
module.exports = class _Hotel {
	constructor ( ) { }

Guardar(req,res){
	Item.create(
	{
	HOTEL: req.body.HOTEL,
	CARACTERISTICAS: req.body.CARACTERISTICAS,
	UBICACION: req.body.UBICACION,
	HABITACIONES: req.body.HABITACIONES,
	IMAGEN: req.body.IMAGEN,
	ESTRELLAS: req.body.ESTRELLAS,
	PRECIO: req.body.PRECIO,
	FECHA: req.body.FECHA,
	},
	function(err, item){
		if (err){
			res.send(err);}
		else{
				Item.find(function(err, item){
					if (err)
						res.send(err)
					
					res.json(item);
				});

		}

	});
}


Seleccionartodos(req,res) {
	Item.find(
		function(err, item) {
			if (err)
			{
				res.send(err)
			}else{

				res.json(item);
			}
		}
		);
}
}

