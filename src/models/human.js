'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HumanSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
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
  },
  createdAt: {
    type: Date,
    required: true
  }
});

const Model = mongoose.model('Human', HumanSchema);

module.exports = Model;
