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
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthDay: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});
const Model = mongoose.model('Contracts', ContractsSchema);

module.exports = Model;
