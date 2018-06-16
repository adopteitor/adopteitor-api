'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AnimalSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingress_date: {
    type: String,
    required: true
  }
});
const Model = mongoose.model('Animal', AnimalSchema);

module.exports = Model;
