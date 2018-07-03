'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema(
  {
    stage: {
      type: String,
      required: true
    },
    name: {
      // Should be displayName?
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    description: {
      // A description of the animal.
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    location: {
      // A string describing where in the world the animal is located
      type: String,
      required: false
    },
    entryDate: {
      type: Date,
      required: true
    },
    state: {
      // Adopted, in adoption, other?
      type: String,
      required: true
    }
  },
  { collection: 'animals', versionKey: false }
);

const animalModel = mongoose.model('animal', animalSchema);

module.exports = animalModel;
