'use strict';

const animal = require('./animal');


const mongoose = require('mongoose');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  console.log('[APP]');
  console.log(app);
  console.log('[APP]');
  // mongoose.Promise = global.Promise;
  // mongoose.connect(app.get('mongodb'), { useMongoClient: true });

  app.configure(animal);
};
