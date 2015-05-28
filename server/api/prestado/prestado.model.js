'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PrestadoSchema = new Schema({
  Username: String,
  mail: String,
  articulo: String,
  costo_total: Number,
  fecha_prestamo: Date,
  fecha_devolucion: Date,
  fecha_estimada: Date
  
});

module.exports = mongoose.model('Prestado', PrestadoSchema);