'use strict';

const expect = require('expect');
const MapJunction = require('./MapJunction');

const fixture = {
  id: 'test_id'
};

describe('Class::MapJunction', () => {

  it('exists', () => {
    expect(typeof MapJunction).toBe('function');
  });

  it('can be instantiated', () => {
    var instance = new MapJunction(fixture);
    expect(typeof instance).toBe('object');
  });

});
