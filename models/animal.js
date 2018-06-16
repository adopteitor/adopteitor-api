'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AnimalSchema = new Schema({
  _id: {
    type: ObjectId,
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
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingressDate: {
    type: Date,
    required: true
  }
});
const Model = mongoose.model('Animal', AnimalSchema);

module.exports = Model;
