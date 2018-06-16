'use strict';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const Animals = require('./endpoints/animals.js');
const app = express(feathers());
const mongoose = require('mongoose');
const service = require('feathers-mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/feathers');

app.configure(express.rest());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('animals', new Animals());
app.use(express.errorHandler());

const server = app.listen(3030);

server.on('listening', () => console.log('Adopteitor Server started at http://localhost:3030'));
