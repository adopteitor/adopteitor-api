'use strict';

const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());
const mongoose = require('mongoose');
const services = require('./services');
const appHooks = require('./app.hooks');
const bodyParser = require('body-parser');
const swagger = require('feathers-swagger');
const server = app
  .use(bodyParser.json())
  .hooks(appHooks)
  .configure(express.rest())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.errorHandler())
  .configure(swagger({
    docsPath: '/docs',
    uiIndex: path.join(__dirname, 'docs.html'),
    info: {
      title: 'Adopteitor API',
      description: 'Main adopteitor API. <br> https://github.com/adopteitor'
    }
  }))
  .configure(services)
  .listen(3030);

mongoose.Promise = global.Promise;


mongoose
  .connect('mongodb://adopteitor_mongo:27017', {
    dbName: 'adopteitor'
  })
  .then(() => {
    console.log('[mongoose.connected]');
  })
  .catch((err) => {
    console.log('[mongoose.connection failed]', err);
  });


server.on('listening', () => {
  process.stdout.write('\u001b[2J\u001b[0;0H'); // This is for clearing the console.
  console.log('Adopteitor Server started at http://localhost:3030');
});
