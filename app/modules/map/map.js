'use strict';

const _ = require('lodash');
const MapNode = require('../../classes/MapNode');
const MapJunction = require('../../classes/MapJunction');

class Map {
  constructor () {
    this.junctions = [];
    this.nodes = [];
  }

/**
   * Used to retrieve a single junction by Id.
   *
   * @param (string) junctionId unique identifier for the node being searched for.
   * @return (object) the node value or undefined
   **/
  getJunctionById (junctionId) {
    return _(this.junctions).filter({ id: junctionId }).value()[0];
  }

  /**
   * Used to retrieve a single junction by Id.
   *
   * @param (string) junctionId unique identifier for the node being searched for.
   * @return (array) set of junctions that include the indicated nodeId as a connection.
   **/
  getJunctionByNodeId (nodeId) {
    return _(this.junctions).filter(function (item) { return item.connected.includes(nodeId); }).value();
  }

  /**
   * Used to retrieve a single node by Id.
   *
   * @param (string) nodeId unique identifier for the node being searched for.
   * @return (object) the node value or undefined
   **/
  getNode (nodeId) {
    return _(this.nodes).filter({ id: nodeId }).value()[0];
  }

  /**
   * Accepts input data and creates a corresponding Junction
   *
   * @param (string) nodeId unique identifier for the node being searched for.
   * @return (object) the node value or undefined
   **/
  loadJunction (junctionData) {
    this.junctions.push( new MapJunction (junctionData) );
  }

  /**
   * Accepts input data and creates a corresponding Node
   *
   * @param (string) nodeId unique identifier for the node being searched for.
   * @return (object) the node value or undefined
   **/
  loadNode (nodeData) {
    this.nodes.push( new MapNode (nodeData) );
  }

}

module.exports = Map;
