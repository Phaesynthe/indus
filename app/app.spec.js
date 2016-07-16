const expect = require('expect');
const app = require('./app');

describe('application', () => {

  it('exists', () => {
    expect(app.test).toBe('value');
  });

  describe('mixing method', () => {

    it('exists', () => {
      expect(typeof app.mix).toBe('function');
    });

    it('provides the correct mixture for a simple value pair', () => {
      expect(app.mix(1, 1)).toBe(1);
    });

  });

});
