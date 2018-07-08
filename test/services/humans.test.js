
const assert = require('assert');
const app = require('../../src/app');

describe('\'Humans\' service', () => {
  it('registered the service', () => {
    const service = app.service('humans');

    assert.ok(service, 'Registered the service');
  });
});
