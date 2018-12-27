const config = require('../../src/helpers/config');

describe('config', () => {
  it('should be default environment', () => {
    expect(config).toEqual({ env: 'production' });
  });
});
