const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const verifyHumanExists = require('../../src/hooks/verify-human-exists.js');

describe('\'verify human exists\' hook', () => {
  beforeEach(() => {
    this.app = feathers();

    this.app.use('/humans', {
      async create(data) {
        return data;
      },
      async get(data) {
        return data;
      }
    });

    this.app.service('humans').hooks({
      before: {
        create: verifyHumanExists()
      }
    });
  });

  it('process the data on create as expected', async () => {
    const data = { humanId: '1234', name: 'person' };
    const result = await this.app.service('humans').create(data);
    assert.deepEqual(result.humanId, '1234');
  });
});
