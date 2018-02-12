"use strict";


const pathMatiereLogo = '/uploads/matiere/logo/';

const ObjectID = require('mongodb').ObjectID;

module.exports = function (db) {
  return {
    /*
    * API MATIERE : ADD
    */
    addMatiere: function (req, res) {
      if (!req.file) {
        res.status(500).send("Aucune image.");
        return;
      }
      req.body.logoName = req.file.originalname;
      req.body.logo = pathMatiereLogo + req.file.originalname;
      db.collection('matieres').insert(req.body, function (err, result) {
        if (err) {
          res.status(500).send("Une erreur s\'est produite");
        } else {
          res.status(200).send(result.ops[0]);
        }
      });
    },
    /*
    * API MATIERE : GET
    */
    getMatiere: function (req, res) {
      db.collection('matieres').find().toArray(function (err, result) {
        if (err) {
          res.status(500).send("Une erreur s\'est produite");
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(result);
        }
      });
    },
    /*
    * API MATIERE : DELETE
    */
    deleteMatiere: function (req, res) {
      const id = req.params.id;
      const _ObjectID = {'_id': new ObjectID(id)}
      db.collection('matieres').remove(_ObjectID, function (err) {
        if (err) {
          res.status(500).send("Une erreur s\'est produite");
        } else {
          res.header("Content-Type", "text/html; charset=utf-8");
          res.status(200).send("La matiere :" + id + "a été supprimé.");
        }
      });
    }
  };
}
