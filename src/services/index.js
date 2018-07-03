'use strict';

const animal = require('./animal');
const human = require('./human');
const contract = require('./contract');

const mongoose = require('mongoose');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  // mongoose.Promise = global.Promise;
  // mongoose.connect(app.get('mongodb'), { useMongoClient: true });

  app.configure(animal);
  app.configure(human);
  app.configure(contract);

};
