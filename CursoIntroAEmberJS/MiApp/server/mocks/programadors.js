'use strict';

module.exports = function(app) {
  const express = require('express');
  let programadorsRouter = express.Router();
  let cache = [
    {id:1, nombre:'Maria Laura (bakend)',pais:'Argentina',visitas:0},
    {id:2, nombre:'Martin Cabral (bakend)',pais:'Paraguay',visitas:0},
    {id:3, nombre:'Julian Assange (bakend)',pais:'Australia',visitas:0},
  ];
  let nextId = cache.length + 2;

  /**
  * formatea el json crudo en el formato que espera ember data
  */
  let comoRegistroDelModelo = function(json) {
    return {
        id: json.id,
        attributes: json,
        type: "programadors"
    };
  };

  /**
  * busca un registro con la propiedad y valor que se le paso
  */
  let buscarRegistros = function(propiedad, valor) {
    return cache.filterBy(propiedad,valor);
  };

  programadorsRouter.get('/', function(req, res) {

    let records = [];
    cache.forEach(function(record) {
      records.push(comoRegistroDelModelo(record));
    });

    res.send({
      data: records
    });
    res.status(200).end();
  });

  programadorsRouter.post('/', function(req, res) {
    let nuevo = req.body.data.attributes;
    nuevo.id = nextId++;
    cache.push(nuevo);
    res.send({ data: comoRegistroDelModelo(nuevo)}).status(200).end();
  });

  programadorsRouter.get('/:id', function(req, res) {

    cache.forEach(function(record) {
      if(record.id == req.params.id) {
        res.send({
          data: comoRegistroDelModelo(record)
        });
        res.status(200).end();
        return;
      }
    });
    res.send({ message: 'No se encontro'}).status(400).end();
  });

  programadorsRouter.patch('/:id', function(req, res) {
    for (let i = 0 ; i < cache.length; i++) {
      let record = cache[i];
      if(record.id == req.params.id) {
        let nuevo = req.body.data.attributes;
        record.nombre = nuevo.nombre;
        record.pais = nuevo.pais;
        record.visitas = nuevo.visitas;
        res.send({
          data: comoRegistroDelModelo(record)
        });
        res.status(200).end();
        return;
      }
    }

    res.send({ message: 'No se encontro' }).status(400).end();
  });

  programadorsRouter.delete('/:id', function(req, res) {

    let borrado = null;
    cache.forEach(function(record) {
      if(record.id == req.params.id) {
        borrado = record;
        cache.splice( cache.indexOf(record), 1 );
      }
    });

    if(borrado) {
      res.send({ data: comoRegistroDelModelo(borrado) }).status(200).end();
    } else {
      res.send({ message: 'No se encontro'}).status(400).end();
    }
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/programadors', require('body-parser').json({ type: 'application/*+json' }), programadorsRouter);
  //app.use('/api/programadors', programadorsRouter);
};
