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
      humans: m2s(human),
      'humans list': {
        type: 'array',
        items: { $ref: '#definitions/humans' }
      }
    }
  };

  app
    .use('/humans', humanService)
    .hooks(hooks);
};
