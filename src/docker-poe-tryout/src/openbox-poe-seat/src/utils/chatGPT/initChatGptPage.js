const { myLogger } = require('../myLogger');

async function initChatGptPage(page) {
  let output = { state: 'init', debug: {}, error: '' };
  try {
    await page.goto('https://poe.com/ChatGPT');
    return 'init ChatGPT page';
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));
    return 'error during init ChatGPT page';
  }
}

module.exports = initChatGptPage;
