const { myLogger } = require('../myLogger');

var assert = require('chai').assert;

async function botCooldown(time_s, page) {
  await page.waitForTimeout(time_s * 1000);
}

module.exports = botCooldown;
