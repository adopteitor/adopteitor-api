

const validateAnimal = require('../../hooks/validate-animal');
const validateHuman = require('../../hooks/validate-human');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateAnimal(), validateHuman()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
