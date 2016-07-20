'use strict';

const expect = require('expect');
const MapNode = require('./MapNode');

const fixture = {
  id: 'test_id'
};

describe('Class::MapNode', () => {

  it('exists', () => {
    expect(typeof MapNode).toBe('function');
  });

  it('can be instantiated', () => {
    var instance = new MapNode(fixture);
    expect(typeof instance).toBe('object');
  });

});
