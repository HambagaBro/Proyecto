class Hotel {
	constructor (_id,
		HOTEL,
		CARACTERISTICAS,
		UBICACION,
		HABITACIONES,
		IMAGEN,
		ESTRELLAS,
		PRECIO,
		FECHA
		) {
		this._id=_id;
		this.CARACTERISTICAS=CARACTERISTICAS;
		this.UBICACION=UBICACION;
		this.HABITACIONES=HABITACIONES;
		this.IMAGEN=IMAGEN;
		this.ESTRELLAS=ESTRELLAS;
		this.PRECIO=PRECIO;
		this.FECHA=FECHA;
	}

Guardar(){
	var objetoaenviar = this;
	return new Promise(function(resolve,reject){

		try{

			var xhr=new XMLHttpRequest();
xhr.open('POST', '/api/nuevohotel');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
	if (xhr.status === 200) {
		resolve(JSON.parse(xhr.responseText));
	}
	else{
		reject(xhr);
	}
};
xhr.send(JSON.stringify(objetoaenviar));
		
}
catch(err){
	reject(err.message);
}
	});
}


Seleccionartodos(){
	var objetoaenviar = this;
	return new Promise(function(resolve,reject){

		try{

			var xhr=new XMLHttpRequest();
xhr.open('POST', '/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
	if (xhr.status === 200) {
		resolve(JSON.parse(xhr.responseText));
	}
	else{
		reject(xhr);
	}
};
xhr.send(JSON.stringify(objetoaenviar));
		
}
catch(err){
	reject(err.message);
}
	});
}

hotelpormesyanno(mes,anno){
	var objetoaenviar = this;
	var vectordehotelesfiltrados = [];
	return new Promise(function(resolve, reject){
		try{
			var xhr = new XMLHttpRequest();
	xhr.open('POST','/api/seleccionahotel');
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.onload = function(){
		if(xhr.status === 200){
			var hoteles =JSON.parse(xhr.responseText);

			for(var elemento in hoteles)
			{
				var fechadesalida = new Date(hoteles[elemento].FECHA);
				if ((fechadesalida.getMonth()+1 == mes)&& (fechadesalida.getFullYear() == anno))
				{
					vectordehotelesfiltrados.push(hoteles[elemento]);
				}
			}
			resolve(vectordehotelesfiltrados);
		}
		else{
			reject(xhr);
		}
	};
	xhr.send(JSON.stringify(objetoaenviar));
	}
	catch(err){
		reject(err.message);
	}
	});
}
}
