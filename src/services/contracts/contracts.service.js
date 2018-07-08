

// Initializes the `Contracts` service on path `/contracts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/contracts.model');
const hooks = require('./contracts.hooks');
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
    description: 'A service to manage contracts',
    definitions: {
      contracts: m2s(Model)
    },
    'contracts list': {
      type: 'array',
      items: { $ref: '#definitions/contracts' }
    }
  };

  app.use('/contracts', service);
  app.service('contracts').hooks(hooks);

};
