
const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const verifyAnimalExists = require('../../src/hooks/verify-animal-exists.js');

describe('\'verify animal exists\' hook', () => {
  beforeEach(() => {
    this.app = feathers();

    this.app.use('/animals', {
      async create(data) {
        return data;
      },
      async get(data) {
        return data;
      }
    });

    this.app.service('animals').hooks({
      before: {
        create: verifyAnimalExists()
      }
    });
  });

  it('process the data on create as expected', async () => {
    const data = { animalId: '1234', name: 'dog' };
    const result = await this.app.service('animals').create(data);
    assert.deepEqual(result.animalId, '1234');
  });
});
