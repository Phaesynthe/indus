'use strict';

const _ = require('lodash');

var MapNode = class {
  constructor (nodeData) {
    this.id = nodeData.id;
  }
};

module.exports = (function () {
  // The map is constructed of nodes that are connected by junctions
  // This will initially be used to explor the structure of these entities

  var nodes = [];

  return {
    loadNode (nodeData) {
      nodes.push( new MapNode (nodeData));
    },
    getNode (nodeId) {
      return _(nodes).filter({ id: nodeId }).value()[0];
    }
  };

})();
