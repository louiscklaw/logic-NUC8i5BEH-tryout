const fetch = require('node-fetch');
const { CANONICAL_HOSTNAME, DBAPI_ENDPOINT } = require('../config');
const { myLogger } = require('./myLogger');

async function reportOffline() {
  let output = { state: 'init', debug: {}, error: '' };
  const url = `${DBAPI_ENDPOINT}/PoeSeatStatus/offline/${CANONICAL_HOSTNAME}`;

  //const response = await fetch(url, {
  //  method: 'patch',
  //  headers: { 'Content-Type': 'application/json' },
  //});

  try {
    output = { ...output, state: 'start' };
    const response = await fetch(url, {
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);

    myLogger.info(JSON.stringify(data));
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));
  }
}

module.exports = { reportOffline };
