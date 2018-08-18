"use strict";

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const professeurModel = require('../Model/professeurModel');

module.exports = function (db) {

  return {
    /*
     * API PROFESSEUR : ADD
     */
    addProfesseur: function (req, res) {
      let _professeurModel = new professeurModel();
      _professeurModel.nom = req.body.name;
      _professeurModel.prenom = req.body.adresse;
      _professeurModel.etablissementId = req.body.etablissementId;
      _professeurModel.matiereId = req.body.matiereId;
      _professeurModel.save(function (err, result) {
        if (err) {
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.status(200).send("Professeur ajouté avec succès");
        }
      });
    }
  };

};
