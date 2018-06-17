'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnimalsSchema = new Schema({
  stage: {
    type: String,
    required: true
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
  entryDate: {
    type: Date,
    required: true
  }
});

const Model = mongoose.model('Animals', AnimalsSchema);

module.exports = Model;
