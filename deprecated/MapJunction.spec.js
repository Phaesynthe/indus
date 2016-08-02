'use strict';

const expect = require('expect');
const MapJunction = require('./MapJunction');

const fixture = {
  id: 'test_id'
};

describe('Class::MapJunction', () => {

  it('can be instantiated', () => {
    var instance;

    expect(typeof MapJunction).toBe('function');
    instance = new MapJunction(fixture);
    expect(typeof instance).toBe('object');
  });

  it('defaults fields that are not provided',() => {
    var instance = new MapJunction();
    expect(typeof instance.id).toBe('string');
    expect(instance.connections.length).toBe(0);
  });

  it('mounts provided locations', () => {
    var partialFixture = {
      id: 'test_id',
      connections: [ 1, 2, 3 ]
    };
    var instance = new MapJunction(partialFixture);
    expect(instance.connections.length).toBe(partialFixture.connections.length);
    expect(instance.connections[0]).toBe(partialFixture.connections[0]);
  });

});
