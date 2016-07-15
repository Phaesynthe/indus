const expect = require('expect');

// var config = {
//   csrf: false, 
//   environment: 'development',
//   log: { level: 'silent' },
//   models: { migrate: 'drop' }
// };

// before(done => {
var app = require('./app');
// });

describe('application', () => {
  
  it('exists', () => {
    expect(app.test).toBe('value');
  });

});
