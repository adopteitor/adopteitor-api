

const animals = require('./animals/animals.service.js');
const contracts = require('./contracts/contracts.service.js');
const humans = require('./humans/humans.service.js');
const species = require('./species/species.service.js');
const breeds = require('./breeds/breeds.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(animals);
  app.configure(contracts);
  app.configure(humans);
  app.configure(species);
  app.configure(breeds);
};
