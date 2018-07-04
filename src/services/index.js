

const animals = require('./animals/animals.service.js');
const contracts = require('./contracts/contracts.service.js');
const humans = require('./humans/humans.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(animals);
  app.configure(contracts);
  app.configure(humans);
};
