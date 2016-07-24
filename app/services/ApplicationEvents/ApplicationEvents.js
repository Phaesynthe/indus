'use strict';

const events = require('events');

class ApplicationEvents {
  constructor () {
    this.eventEmitter = new events.EventEmitter();
  }

  /**
   * registerEvent()
   *
   * @param (string) name The string key that identifies the event.
   * @param (function) handler The function that runs when the named event fires.
   */
  registerEvent (name, handler) {
    this.eventEmitter.on(name, handler);
  }
}

module.exports = ApplicationEvents;
