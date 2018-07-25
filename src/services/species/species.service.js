

// Initializes the `Species` service on path `/species`
const createService = require('feathers-mongoose');
const createModel = require('../../models/species.model');
const hooks = require('./species.hooks');
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
    description: 'A service to manage species',
    definitions: {
      species: m2s(Model)
    },
    'species list': {
      type: 'array',
      items: { $ref: '#definitions/species' }
    }
  };

  app.use('/species', service);
  app.service('species').hooks(hooks);
};
