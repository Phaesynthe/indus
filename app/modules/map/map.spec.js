'use strict';

const expect = require('expect');
const map = require('./map');
// const proxyquire = require('proxyquire').noCallThru();
// const sinon = require('sinon');
var fixture = { id: 'fake_id' };

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

  it('imports a map junction correctly', () => {
    map.loadJunction(fixture);
    expect(map.getJunctionById(fixture.id).id).toBe(fixture.id);
  });

  it('imports a map node correctly', () => {
    map.loadNode(fixture);
    expect(map.getNode(fixture.id).id).toBe(fixture.id);
  });

});
