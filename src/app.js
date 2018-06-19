'use strict';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const animalModel = require('./models/animal.js');

mongoose.Promise = global.Promise;

app
  .configure(express.rest())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/animals', service({
    Model: animalModel,
    lean: true, // set to false if you want Mongoose documents returned
    paginate: {
      default: 2,
      max: 4
    }
  }))
  .use(express.errorHandler());

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

const server = app.listen(3030);

server.on('listening', () => {
  process.stdout.write('\u001b[2J\u001b[0;0H'); // This is for clearing the console.
  console.log('Adopteitor Server started at http://localhost:3030');
});
