const { myLogger } = require('../myLogger');

var assert = require('chai').assert;

function assertKeyWord(to_check, keyword_wanted) {
  return assert(
    to_check.toLowerCase().indexOf(keyword_wanted) >= -1,
    `reply failed -> no "${keyword_wanted}", 
    to_check:${to_check}`,
  );
}

module.exports = assertKeyWord;
