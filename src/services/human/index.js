'use strict';

const hooks = require('./hooks');
const service = require('feathers-mongoose');
const human = require('./human-model');
const m2s = require('mongoose-to-swagger');

module.exports = function(){
  const app = this,
    options = {
      Model: human
    },
    humanService = service(options);

  humanService.docs = {
    description: 'A service to manage humans',
    definitions: {
      humans: m2s(human)
    }
  };

  app
    .use('/humans', humanService)
    .service('/humans')
    .hooks(hooks);
};
