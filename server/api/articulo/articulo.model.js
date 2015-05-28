'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticuloSchema = new Schema({
  titulo: String,
  categoria: String,
  ano: Number,
  autor: String,
  proveedor: String,
  precio: Number,
  ubicacion: String,
  diasprestamo: {
    type: Number,
    default: 5
  },
  disponible: {
    type: Boolean,
    default: true
  },
  marca: String,
  espera: [{ type: Schema.Types.ObjectId, ref: 'User' }]

   

  
});

module.exports = mongoose.model('Articulo', ArticuloSchema);