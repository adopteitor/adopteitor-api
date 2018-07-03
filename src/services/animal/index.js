'use strict';

const hooks = require('./hooks');
const service = require('feathers-mongoose');
const animal = require('./animal-model');
const m2s = require('mongoose-to-swagger');

module.exports = function() {
  const app = this,
    options = {
      Model: animal
    },
    animalService = service(options);

  animalService.docs = {
    description: 'A service to manage animals',
    definitions: {
      animals: m2s(animal),
      'animals list': {
        type: 'array',
        items: { $ref: '#definitions/animals' }
      }
    }
  };

  app.use('/animals', animalService).hooks(hooks);
};
