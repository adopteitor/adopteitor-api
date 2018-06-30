'use strict';

const hooks = require('./hooks');
const service = require('feathers-mongoose');
const contract = require('./contract-model');
const m2s = require('mongoose-to-swagger');

module.exports = function(){
  const app = this,
    options = {
      Model: contract
    },
    contractService = service(options);

  contractService.docs = {
    description: 'A service to manage contracts',
    definitions: {
      contracts: m2s(contract)
    }
  };

  app
    .use('/contracts', contractService)
    .hooks(hooks);
};
