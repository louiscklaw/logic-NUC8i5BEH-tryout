const fetch = require('node-fetch');
const { myLogger } = require('../myLogger');

function chatHistory(session_id, comment, level = 'info') {
  const body = { level, comment };

  return fetch('http://dbapi:3001/api/v1/Log', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).catch(err => {
    myLogger.error(JSON.stringify(err));
  });
}

module.exports = chatHistory;
