'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContractsSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  animalId: {
    type: ObjectId,
    required: true
  },
  humanId: {
    type: ObjectId,
    required: true
  },
  timeStamp: {
    type: Date,
    required: true
  },
  contract: {
    type: String,
    required: true
  }
});
const Model = mongoose.model('Contracts', ContractsSchema);

module.exports = Model;
