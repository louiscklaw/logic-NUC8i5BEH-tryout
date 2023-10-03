const fetch = require('node-fetch');
const { myLogger } = require('../myLogger');

function appendChat(_id, q_and_a) {
  return fetch(`http://dbapi:3001/api/v1/Log/${_id}`)
    .then(res => res.json())
    .then(res_json => {
      var temp_comment = JSON.parse(res_json['comment']);
      temp_comment.push(q_and_a);
      var body = { level: 'chat', comment: JSON.stringify(temp_comment) };

      return fetch(`http://dbapi:3001/api/v1/Log/${_id}`, {
        method: 'patch',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
    })
    .catch(err => {
      myLogger.error(JSON.stringify(err));
    });
}

module.exports = appendChat;
