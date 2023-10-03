const fetch = require('node-fetch');
const { myLogger } = require('../myLogger');

function newChat() {
  const comments = [];
  comments.push({ _sys: 'new_chat_init' });
  const test_a = [];
  const body = { level: 'chat', comment: JSON.stringify(test_a) };

  return fetch('http://dbapi:3001/api/v1/Log', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(res_json => {
      console.log(res_json);
      console.log('init chat done');
      return res_json._id;
    })
    .catch(err => {
      myLogger.error(JSON.stringify(err));
    });
}

module.exports = newChat;
