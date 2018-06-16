'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContractsSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  animalId: {
    type: String,
    required: true
  },
  humanId: {
    type: String,
    required: true
  },
  timeStamp: {
    type: String,
    required: true
  },
  contract: {
    type: String,
    required: true
  }
});
const Model = mongoose.model('Contracts', ContractsSchema);

module.exports = Model;
