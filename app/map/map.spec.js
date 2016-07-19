const expect = require('expect');
const mapNodeFixture = require('../../testHelpers/fixtures/mapNode');
const map = require('./map');

describe('map', () => {

  it('exists', () => {
    expect(typeof map).toBe('object');
  });

  it('exposes a method for loading map nodes', () => {
    expect(typeof map.loadNode).toBe('function');
  });

  it('exposes a method for retrieving map nodes', () => {
    expect(typeof map.getNode).toBe('function');
  });

  it('imports a map node correctly', () => {
    map.loadNode(mapNodeFixture);
    expect(map.getNode(mapNodeFixture.id).id).toBe(mapNodeFixture.id);
  });

  it('imports a map node correctly when no data is provided', () => {
    map.loadNode(mapNodeFixture);
    expect(map.getNode()).toBe(undefined);
  });

});
