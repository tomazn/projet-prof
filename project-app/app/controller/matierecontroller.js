"use strict";


const pathMatiereLogo = '/uploads/matiere/logo/';
const ObjectID = require('mongodb').ObjectID;
const matiereModel = require('../Model/matiereModel');

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
      let _matiereModel = new matiereModel();
      _matiereModel.intitule = req.body.intitule;
      _matiereModel.logoName = req.file.originalname;
      _matiereModel.logo = pathMatiereLogo + req.file.originalname;
      _matiereModel.save(function (err, result) {
        if (err) {
          res.status(500).send("Une erreur s\'est produite");
        } else {
          res.status(200).send(result);
        }
      });
    },
    /*
    * API MATIERE : GET
    */
    getMatiere: function (req, res) {
      matiereModel.find(null, function (err, result) {
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
      matiereModel.remove(_ObjectID, function (err) {
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
