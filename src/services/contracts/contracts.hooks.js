

const verifyAnimalExists = require('../../hooks/verify-animal-exists');
const verifyHumanExists = require('../../hooks/verify-human-exists');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      verifyAnimalExists(),
      verifyHumanExists()
    ],
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
