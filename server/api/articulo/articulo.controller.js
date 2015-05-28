'use strict';

var _ = require('lodash');
var Articulo = require('./articulo.model');

// Get list of articulos
exports.index = function(req, res) {
  Articulo.find(function (err, articulos) {
    if(err) { return handleError(res, err); }
    return res.json(200, articulos);
  });
};

// Get a single articulo
exports.show = function(req, res) {
  Articulo.findById(req.params.id, function (err, articulo) {
    if(err) { return handleError(res, err); }
    if(!articulo) { return res.send(404); }
    return res.json(articulo);
  });
  
};

exports.encontrar = function(req, res) {
  
  Articulo.findById(req, function (err, articulo) {
     
    if(err) { return handleError(res, err); }
    if(!articulo) { return res.send(404); }
    return res.json(articulo);
  });
  
};

// Creates a new articulo in the DB.
exports.create = function(req, res) {
  
  Articulo.create(req.body, function(err, articulo) {
    if(err) { return handleError(res, err); }
    return res.json(201, articulo);
  });
};

// Updates an existing articulo in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Articulo.findById(req.params.id, function (err, articulo) {
    if (err) { return handleError(res, err); }
    if(!articulo) { return res.send(404); }
    var updated = _.merge(articulo, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, articulo);
    });
  });
};

exports.prestado = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Articulo.findById(req.params.id, function (err, articulo) {
    if (err) { return handleError(res, err); }
    if(!articulo) { return res.send(404); }

    articulo.disponible = req.body.disponible;
    articulo.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, articulo);
    });
  });
};

/*exports.adduser = function (req, res) {
  var artiId = req.articulo._id;
  //console.log(req.headers.authorization);
  Articulo.findById(artiId, function (err, articulo) {
    if (err) return validationError(res, err); 
    else {
    
       
          articulo.espera.push(req.body._id)
              //_.uniq(user.prestamos);n
              articulo.save(function(err, articulo){
                if (err) return validationError(res, err);
              });
          Articulo
               .findOne({id:articulo._id})
               .populate('espera')
               .exec(function(err,articulo){
                 if (err) return handleError(err);

          })

    }
  });

};*/


// Deletes a articulo from the DB.
exports.destroy = function(req, res) {
  Articulo.findById(req.params.id, function (err, articulo) {
    if(err) { return handleError(res, err); }
    if(!articulo) { return res.send(404); }
    articulo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}