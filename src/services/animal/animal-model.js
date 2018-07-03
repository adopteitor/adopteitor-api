'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema(
  {
    stage: {
      type: String,
      required: true,
      enum: ['Puppy', 'Adult', 'Oldie']
    },
    name: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other']
    },
    location: {
      type: String,
      required: false
    },
    entryDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['adopted', 'other']
    },
    species: {
      type: Schema.Types.ObjectId,
      required: true
    },
    race: {
      type: Schema.Types.ObjectId,
      required: false
    },
    photos: [{
      type: String,
      required: false
    }]
  },
  { collection: 'animals', versionKey: false }
);

const animalModel = mongoose.model('animal', animalSchema);

module.exports = animalModel;
