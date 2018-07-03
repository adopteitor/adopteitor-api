'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const humanSchema = new Schema({
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
  },
  role: {
    type: String,
    required: true,
    enum: ['User', 'Admin']
  }
}, { collection: 'humans', versionKey: false });

const humanModel = mongoose.model('human', humanSchema);

module.exports = humanModel;
