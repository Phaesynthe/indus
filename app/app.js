// 'use strict';

// Services
const ApplicationEvents = require('./services/ApplicationEvents/ApplicationEvents');

// Modules
// const Map = require('modules/map');

(function () {
  // var map = new Map();
  var events = new ApplicationEvents();

  events.registerEvent('tic', () => {
    process.stdout.write('Application fire all tick actions');
  });

  events.registerEvent('saveState', () => {
    // Convert all structures to a file savable state and return to the initiating block
    process.stdout.write('Application fire all serialize actions');
  });

})();
