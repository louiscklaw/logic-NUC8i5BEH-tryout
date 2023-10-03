const { myLogger } = require('../myLogger');

function helloworld(test_call = '') {
  myLogger.info(test_call);
  myLogger.info('chatGPT.js: helloworld');
}

module.exports = helloworld;
