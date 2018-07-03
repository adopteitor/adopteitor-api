'use strict';

// const errors = require('feathers-errors');
// const request = require('request-promise');
const commonHooks = require('feathers-hooks-common');
exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [commonHooks.disallow()],
  patch: [commonHooks.disallow()],
  remove: [commonHooks.disallow()]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
