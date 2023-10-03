const { ERROR, DONE } = require('../../constants');
const { myLogger } = require('../myLogger');

async function initChatGptPage(page) {
  let output = { state: 'init', debug: {}, error: '' };

  try {
    await page.evaluate(() => {
      try {
        localStorage.clear();
      } catch (error) {}
    });
    await page.goto('https://poe.com/ChatGPT');

    await page.evaluate(() => {
      localStorage.clear();
      localStorage.setItem('cleared', 'helloworld');
      sessionStorage.clear();
      sessionStorage.setItem('cleared', 'helloworld');
    });

    output = { ...output, state: DONE };
    return 'init ChatGPT page';
  } catch (error) {
    output = { ...output, state: ERROR, error };
    myLogger.error(JSON.stringify(output));
    return 'error during init ChatGPT page';
  }
}

module.exports = initChatGptPage;
