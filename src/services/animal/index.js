'use strict';

const hooks = require('./hooks');
const service = require('feathers-mongoose');
const animal = require('./animal-model');

module.exports = function(){
  const app = this;

  const options = {
    Model: animal
  };

  app
    .use('/animals', service(options))
    .service('/animals')
    .hooks(hooks);
};
