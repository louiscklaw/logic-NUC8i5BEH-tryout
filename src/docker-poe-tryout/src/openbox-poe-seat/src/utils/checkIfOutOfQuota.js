const { OUT_OF_QUOTA } = require('../worker/poe/chatGPT/error');
const { myLogger } = require('./myLogger');

async function checkIfOutOfQuota(page) {
  let output = { state: 'init', debug: {}, error: '' };

  try {
    myLogger.info('checkIfOutOfQuota.js: init');

    const [left_incidator] = await page.$x("//div[contains(., 'Standard bots: 0 left')]");
    if (left_incidator) throw new Error(OUT_OF_QUOTA);

    myLogger.info('checkIfOutOfQuota.js: done');
  } catch (error) {
    if (error.message == OUT_OF_QUOTA) {
      myLogger.error('out of quota for ChatGPT');
    }
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));

    throw error;
  }
}

module.exports = { checkIfOutOfQuota };
