"use strict";

const multer = require('multer');
const path = require('path');

const pathMatiereLogo = '/uploads/matiere/logo/';
var storageMatiere = multer.diskStorage(
  {
    destination: path.join(__dirname, '../../dist' + pathMatiereLogo),
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }
);

const uploadMatiere = multer({storage: storageMatiere});

module.exports = function (app, db) {

  const etablissementController = require('../controller/etablissementController')(db);
  const matiereController = require('../controller/matierecontroller')(db);

  /*
  *  ################### ETABLISSEMENTS ###################
  */
  app.get('/api/getEtablissements', etablissementController.getEtablissements);
  app.get('/api/getEtablissement/:id', etablissementController.getEtablissement);
  app.post('/api/addEtablissement', etablissementController.addEtablissement);
  app.delete('/api/deleteEtablissement/:id', etablissementController.deleteEtablissement);
  app.put('/api/editEtablissement/:id', etablissementController.editEtablissement);

  /*
   *  ################### MATIERE ###################
   */
  app.post('/api/addMatiere', uploadMatiere.single('logo'), matiereController.addMatiere);
  app.get('/api/getMAtieres', matiereController.getMatiere);
  app.delete('/api/deleteMAtiere/:id', matiereController.deleteMatiere);
};
