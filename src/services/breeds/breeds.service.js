

// Initializes the `Breed` service on path `/breeds`
const createService = require('feathers-mongoose');
const createModel = require('../../models/breeds.model');
const hooks = require('./breeds.hooks');
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
    description: 'A service to manage breeds',
    definitions: {
      breeds: m2s(Model)
    },
    'breeds list': {
      type: 'array',
      items: { $ref: '#definitions/breeds' }
    }
  };

  app.use('/breeds', service);
  app.service('breeds').hooks(hooks);
};
