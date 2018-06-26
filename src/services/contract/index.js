'use strict';

const hooks = require('./hooks');
const service = require('feathers-mongoose');
const contract = require('./contract-model');

module.exports = function(){
  const app = this;

  const options = {
    Model: contract
  };

  // Initialize our service with any options it requires
  app.use('/contracts', service(options));

  // Get our initialize service to that we can bind hooks
  const contractService = app.service('/contracts');
  // Set up our before hooks
  contractService.hooks({
    before: hooks.before,
    after: hooks.after
  });
};
