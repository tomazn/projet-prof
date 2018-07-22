"use strict";

const mongoose = require('mongoose');

const etablissementSchema = new mongoose.Schema({
  name : { type:String, required: [true, 'Le nom doit être renseigné.']},
  adresse : { type:String, required: [true, 'L\'adresse doit être renseigné.']},
  cp: { type: Number, min: 0, max: 99999, validate: {
    validator: function(v) {
      return /^(0|[1-9][0-9]*)$/.test(v);
    },
    message: '{VALUE} n\'est pas un code postal valide.'
  }},
  type: { type: String, enum: ['Lycée','Collège'], required: [true, 'Le type doit être renseigné.']}
});

const etablissementModel = mongoose.model("etablissement", etablissementSchema);

module.exports = etablissementModel;
