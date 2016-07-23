/* global before */
'use strict';

const expect = require('expect');
const Map = require('./map');
describe('map', () => {

  describe('load operations', () => {
    var fixture = { id: 'fake_id' };
    var map;

    before(() => {
      map = new Map();
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

  describe('retrieval operations', () => {
    var map = new Map();
    var nodeFixtures = [
      {
        id: 'fake_id_1'
      },
      {
        id: 'fake_id_2'
      }
    ];
    var junctionFixtures = [
      {
        connections: [ 'fake_id_1', 'fake_id_2' ]
      },
      {
        connections: [ 'fake_id_3', 'fake_id_2' ]
      }
    ];

    before(() => {
      map.loadNode(nodeFixtures[ 0 ]);
      map.loadNode(nodeFixtures[ 1 ]);
      map.loadJunction(junctionFixtures[ 0 ]);
      map.loadJunction(junctionFixtures[ 1 ]);
    });

    // it('retrieves junctions by nodeId', () => {
    //   var set = map.getJunctionsByNodeId('fake_id_1');
    //   expect(set.length).toBe(1);
    // });

  // //   it('retrieves nodes by junctionId', () => {

  // //   });

  });

});
