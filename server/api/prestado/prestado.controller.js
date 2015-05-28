'use strict';

var _ = require('lodash');
var Prestado = require('./prestado.model');

// Get list of prestados
exports.index = function(req, res) {
  Prestado.find(function (err, prestados) {
    if(err) { return handleError(res, err); }
    return res.json(200, prestados);
  });
};

// Get a single prestado
exports.show = function(req, res) {
  Prestado.findById(req.params.id, function (err, prestado) {
    if(err) { return handleError(res, err); }
    if(!prestado) { return res.send(404); }
    return res.json(prestado);
  });
};

// Creates a new prestado in the DB.
exports.create = function(req, res) {
  Prestado.create(req.body, function(err, prestado) {
    if(err) { return handleError(res, err); }
    return res.json(201, prestado);
  });
};

// Updates an existing prestado in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Prestado.findById(req.params.id, function (err, prestado) {
    if (err) { return handleError(res, err); }
    if(!prestado) { return res.send(404); }
    var updated = _.merge(prestado, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, prestado);
    });
  });
};

// Deletes a prestado from the DB.
exports.destroy = function(req, res) {
  Prestado.findById(req.params.id, function (err, prestado) {
    if(err) { return handleError(res, err); }
    if(!prestado) { return res.send(404); }
    prestado.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}