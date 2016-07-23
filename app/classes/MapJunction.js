'use strict';

class MapJunction {
  constructor (junctionData) {
    if (typeof junctionData != 'object') {
      junctionData = {};
    }
    this.id = junctionData.id || '';
    this.connections = junctionData.connections || [];
  }
}

module.exports = MapJunction;
