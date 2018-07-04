
const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const validateHuman = require('../../src/hooks/validate-human.js');

describe('\'validate human\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/humans', {
      async create(data) {
        return data;
      },
      async get(id) {
        return { id: '1234', name: 'person1'};
      }
    });

    app.service('humans').hooks({
      before: {
        create: validateHuman()
      }
    });
  });

  it('process the data on create as expexted', async () => {
    const data = { humanId: '1234' };
    const result = await app.service('humans').create(data);
    assert.deepEqual(result.humanId, '1234');
  });
});
