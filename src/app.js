'use strict';

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const swagger = require('feathers-swagger');

const logger = require('./logger');
const services = require('./services');
const appHooks = require('./app.hooks');
const mongoose = require('./mongoose');

const app = express(feathers());

// Load app configuration from /config dir
app.configure(configuration());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(mongoose);

// Set up swagger documentation for services
app.configure(swagger(app.get('swagger')));

// Set up our services (see `services/index.js`)
app.configure(services);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
