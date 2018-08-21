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
      _professeurModel.nom = req.body.nom;
      _professeurModel.prenom = req.body.prenom;
      _professeurModel.etablissement = req.body.etablissement;
      _professeurModel.matiere = req.body.matiere;
      _professeurModel.save(function (err, result) {
        if (err) {
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.status(200).send("Professeur ajouté avec succès");
        }
      });
    },
        /*
     * API PROFESSEUR : GET ALL
     */
    getProfesseurs: function (req, res) {
      professeurModel.find(null)
      .populate("etablissement", "name")
      .populate("matiere", "intitule")
      .exec((err, result) => {
        if(err){
          res.status(500).send('Une erreur s\'est produite');
        }else{
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(result);
        }
      });
    },
            /*
     * API PROFESSEUR : GET ONE
     */
    getProfesseur: function (req, res) {
      const id = req.params.id;
      const _ObjectID = {'_id': new ObjectID(id)};
      professeurModel.findOne(_ObjectID)
      .populate("etablissement", "name")
      .populate("matiere", "intitule")
      .exec((err, result) => {
        if(err){
          res.status(500).send('Une erreur s\'est produite');
        }else{
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(result);
        }
      });
    },
      /*
    * API PROFESSEUR : DELETE
    */
   deleteProfesseur: function (req, res) {
    const id = req.params.id;
    const _ObjectID = {'_id': new ObjectID(id)}
    professeurModel.remove(_ObjectID, function (err) {
      if (err) {
        res.status(500).send("Une erreur s\'est produite");
      } else {
        res.header("Content-Type", "text/html; charset=utf-8");
        res.status(200).send("Le professeur :" + id + "a été supprimé.");
      }
    });
  },
   /*
    * API PROFESSEUR : PUT
    */
   editProfesseur: function(req,res) {
    const id = req.params.id;
    const _ObjectId = {'_id': new ObjectID(id)};
    const professeur = { 'nom': req.body.nom, 'prenom': req.body.prenom, 'etablissement': req.body.etablissement, 'matiere': req.body.matiere };
    professeurModel.update(_ObjectId, professeur, function(err,result){
      if(err){
        console.log(err);
        res.status(500).send('Une erreur s\'est produite');
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Le professeur :" + id + "a été modifié.");
      }
    });
  }
  };

};
