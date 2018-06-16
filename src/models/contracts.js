'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const ContractsSchema = new Schema({
  _id: {
    type: Number,
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
