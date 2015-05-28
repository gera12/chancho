/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Prestado = require('./prestado.model');

exports.register = function(socket) {
  Prestado.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Prestado.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('prestado:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('prestado:remove', doc);
}