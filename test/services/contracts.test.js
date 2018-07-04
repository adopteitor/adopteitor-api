
const assert = require('assert');
const app = require('../../src/app');

describe('\'Contracts\' service', () => {
  it('registered the service', () => {
    const service = app.service('contracts');

    assert.ok(service, 'Registered the service');
  });
});
