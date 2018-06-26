'use strict';

const hooks = require('./hooks');
const service = require('feathers-mongoose');
const human = require('./human-model');

module.exports = function(){
  const app = this;

  const options = {
    Model: human
  };

  app
    .use('/humans', service(options))
    .service('/humans')
    .hooks(hooks);

};
