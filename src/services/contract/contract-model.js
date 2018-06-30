'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
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
}, { collection: 'contracts', versionKey: false });

const contractModel = mongoose.model('contract', contractSchema);

module.exports = contractModel;
