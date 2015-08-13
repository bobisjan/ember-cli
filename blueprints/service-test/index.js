/*jshint node:true*/

var testInfo = require('../../lib/utilities/test-info');

module.exports = {
  description: 'Generates a service unit test.',
  locals: function(options) {
    return {
      friendlyTestDescription: testInfo.description(options.entity.name, "Unit", "Service")
    };
  },
};