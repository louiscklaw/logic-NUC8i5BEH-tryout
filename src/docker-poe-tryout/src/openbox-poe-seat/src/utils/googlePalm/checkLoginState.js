const { myLogger } = require('../myLogger');

async function checkLoginState(page) {
  try {
    myLogger.info('googlePalm: checkLoginState start');

    const selector = 'textarea[placeholder="Talk to Google-PaLM on Poe"]';
    await page.waitForSelector(selector);
    await page.waitForTimeout(1 * 1000);

    myLogger.info('googlePalm: checkLoginState done');
  } catch (error) {
    // myLogger.info('chatGPT.js: gpt input box not found, check if logged out')
    throw new Error('gpt input box not found, check if logged out');
  }
}

module.exports = checkLoginState;
