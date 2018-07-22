"use strict";

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const etablissementModel = require('../Model/etablissementModel');

module.exports = function (db) {

  return {
    /*
   * API ETABLISSEMENTS : GET
   * return list of all etablissement in json
   */
    getEtablissements: function (req, res) {
      etablissementModel.find(null, function(err,result){
        if (err) {
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(result);
        }
      });
/*
      db.collection('etablissements').find().toArray(function (err, result) {
        if (err) {
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(result);
        }
      });
*/
    },
    /*
   * API ETABLISSEMENT : GET
   * return etablissement by the ID in json
   */
    getEtablissement: function (req, res) {
      const id = req.params.id;
      const _ObjectId = {'_id': new ObjectID(id)};
      etablissementModel.findOne(_ObjectId, function(err,result){
        if (err) {
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(result);
        }
      });
    },
    /*
     * API ETABLISSEMENT : ADD
     */
    addEtablissement: function (req, res) {
      let _etablissementModel = new etablissementModel();
      _etablissementModel.name = req.body.nom;
      _etablissementModel.adresse = req.body.adresse;
      _etablissementModel.cp = req.body.cp;
      _etablissementModel.type = req.body.type;
      console.log(_etablissementModel);
      _etablissementModel.save(function (err, result) {
        if (err) {
          console.log(err);
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.status(200).send(result.ops[0]);
        }
      });
    },
    /*
    * API ETABLISSEMENT : DELETE
    */
    deleteEtablissement: function (req, res) {
      const id = req.params.id;
      const _ObjectId = {'_id': new ObjectID(id)};
      db.collection('etablissements').remove(_ObjectId, function (err, result) {
        if (err) {
          res.status(500).send('Une erreur s\'est produite');
        } else {
          res.header("Content-Type", "text/html; charset=utf-8");
          res.status(200).send("L'établissement :" + id + "a été supprimé.");
        }
      });
    },
    /*
    * API ETABLISSEMENT : PUT
    */
    editEtablissement: function(req,res) {
      const id = req.params.id;
      const _ObjectId = {'_id': new ObjectID(id)};
      const etablissement = { 'nom': req.body.nom, 'type': req.body.type, 'adresse': req.body.adresse, 'cp': req.body.cp };
      db.collection('etablissements').update(_ObjectId, etablissement, function(err,result){
        if(err){
          res.status(500).send('Une erreur s\'est produite');
        }else{
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send("L'établissement :" + id + "a été modifié.");
        }
      });
    }
  };

};
