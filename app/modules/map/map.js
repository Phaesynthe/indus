'use strict';

const _ = require('lodash');
const MapNode = require('../../classes/MapNode');
const MapJunction = require('../../classes/MapJunction');

module.exports = (function () {
  // The map is constructed of nodes that are connected by junctions
  // This will initially be used to explor the structure of these entities

  var nodes = [];
  var junctions = [];

  return {

    /** Used to retrieve a single junction by Id.
     *
     * @param (string) junctionId unique identifier for the node being searched for.
     * @return (object) the node value or undefined
     **/
    getJunctionById (junctionId) {
      return _(junctions).filter({ id: junctionId }).value()[0];
    },

    /** Used to retrieve a single node by Id.
     *
     * @param (string) nodeId unique identifier for the node being searched for.
     * @return (object) the node value or undefined
     **/
    getNode (nodeId) {
      return _(nodes).filter({ id: nodeId }).value()[0];
    },

    /** Accepts input data and creates a corresponding Junction
     *
     * @param (string) nodeId unique identifier for the node being searched for.
     * @return (object) the node value or undefined
     **/
    loadJunction (junctionData) {
      junctions.push( new MapJunction (junctionData) );
    },

    /** Accepts input data and creates a corresponding Node
     *
     * @param (string) nodeId unique identifier for the node being searched for.
     * @return (object) the node value or undefined
     **/
    loadNode (nodeData) {
      nodes.push( new MapNode (nodeData) );
    }
  };

})();
