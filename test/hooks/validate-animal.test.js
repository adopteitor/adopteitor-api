
const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const validateAnimal = require('../../src/hooks/validate-animal.js');

describe('\'validate animal\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/animals', {
      async create(data) {
        return data;
      },
      async get(id) {
        return { id: '1234', name: 'dog'};
      }
    });

    app.service('animals').hooks({
      before: {
        create: validateAnimal()
      }
    });
  });

  it('process the data on create as expexted', async () => {
    const data = { animalId: '1234' };
    const result = await app.service('animals').create(data);
    assert.deepEqual(result.animalId, '1234');
  });
});
