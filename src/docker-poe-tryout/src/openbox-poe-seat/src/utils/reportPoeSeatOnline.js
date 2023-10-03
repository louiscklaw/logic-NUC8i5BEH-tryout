const fetch = require('node-fetch');

const { CANONICAL_HOSTNAME, DBAPI_ENDPOINT } = require('../config');

const { myLogger } = require('./myLogger');

async function reportOnline() {
  let output = { state: 'init', debug: {}, error: '' };
  const url = `${DBAPI_ENDPOINT}/PoeSeatStatus/online/${CANONICAL_HOSTNAME}`;
  output = { ...output, debug: { ...output.debug, url } };

  try {
    myLogger.info('reportOnline start');
    const response = await fetch(url, {
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    output = { ...output, debug: { ...output.debug, data } };

    myLogger.info('reportOnline done');
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));
  }
}

module.exports = { reportOnline };
