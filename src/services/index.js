'use strict';

const requireDirectory = require('require-directory');
const whitelist = /index.js$/;
const blacklist = /hooks/;

const services = requireDirectory(module, {
  include: whitelist,
  exclude: blacklist
});

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  for (let service in services) {
    if (services.hasOwnProperty(service)) {
      app.configure(services[service].index);
    }
  }
};
