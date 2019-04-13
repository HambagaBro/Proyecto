var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotel = new Schema({
	HOTEL: String,
	CARACTERISTICAS: String,
	UBICACION: String,
	HABITACIONES: String,
	IMAGEN: String,
	ESTRELLAS: Number,
	PRECIO: Number,
	FECHA: Date,
});
module.exports = mongoose.model('Hotel',hotel);