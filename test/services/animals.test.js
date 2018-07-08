
const assert = require('assert');
const app = require('../../src/app');

describe('\'Animals\' service', () => {
  it('registered the service', () => {
    const service = app.service('animals');

    assert.ok(service, 'Registered the service');
  });
});
