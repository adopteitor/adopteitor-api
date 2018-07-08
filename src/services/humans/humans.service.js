

// Initializes the `Humans` service on path `/humans`
const createService = require('feathers-mongoose');
const createModel = require('../../models/humans.model');
const hooks = require('./humans.hooks');
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
    description: 'A service to manage humans',
    definitions: {
      humans: m2s(Model)
    },
    'humans list': {
      type: 'array',
      items: { $ref: '#definitions/humans' }
    }
  };

  app.use('/humans', service);
  app.service('humans').hooks(hooks);
};
