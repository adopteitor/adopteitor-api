'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContractsSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  animalId: {
    type: Schema.ObjectId,
    required: true
  },
  humanId: {
    type: Schema.ObjectId,
    required: true
  },
  createdAt: {
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
