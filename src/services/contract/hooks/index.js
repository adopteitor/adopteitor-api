'use strict';

// const errors = require('feathers-errors');
// const request = require('request-promise');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    function(hook){
      return Promise.all([
        animalsModel.findOne({_id: context.data.animalId}),
        humansModel.findOne({_id: context.data.humanId})
      ])
        .then(([animal, human]) => {
          context.data.animal = animal;
          context.data.human = human;
          // Do any check here.
          return hook;
        })
        .catch((err) => {
          console.log('[ERR]');
          console.log(err);
          console.log('[ERR]');
        });
    }
  ],
  update: [],
  patch: [],
  remove: []
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
