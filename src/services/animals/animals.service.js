

// Initializes the `Contracts` service on path `/animals`
const createService = require('feathers-mongoose');
const createModel = require('../../models/animals.model');
const hooks = require('./animals.hooks');
const m2s = require('mongoose-to-swagger');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  const service = createService(options);

  service.docs = {
    description: 'A service to manage animals',
    definitions: {
      animals: m2s(Model),
      'animals list': {
        type: 'array',
        items: { $ref: '#definitions/animals' }
      }
    }
  };

  app.use('/animals', service);
  app.service('animals').hooks(hooks);
};
