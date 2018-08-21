"use strict";

const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
  intitule : { type:String, required: [true, 'L\'intitulé doit être renseigné.']},
  logoName : { type:String, required: [true, 'Le logo doit être renseigné.'] },
  logo: { type:String, required: [true, 'Le logo doit être renseigné.'] }
});

const matiereModel = mongoose.model("matiere", matiereSchema);

module.exports = matiereModel;
