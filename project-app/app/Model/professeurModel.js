"use strict";

const mongoose = require('mongoose');

const professeurSchema = new mongoose.Schema({
  nom : { type:String, required: [true, 'Le nom doit être renseigné.']},
  prenom : { type:String, required: [true, 'Le prenom doit être renseigné.']},
  etablissementId: { type: mongoose.Schema.Types.ObjectId, ref: 'etablissement' },
  matiereId: {type: mongoose.Schema.Types.ObjectId, ref: 'matiere'}
});

const professeurModel = mongoose.model("professeur", professeurSchema);

module.exports = professeurModel;
