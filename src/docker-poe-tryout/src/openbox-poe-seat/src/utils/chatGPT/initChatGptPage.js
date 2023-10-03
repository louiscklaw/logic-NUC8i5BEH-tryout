const { ERROR, DONE } = require('../../constants');
const { myLogger } = require('../myLogger');

async function initChatGptPage(page) {
  let output = { state: 'init', debug: {}, error: '' };

  try {
    await page.goto('https://poe.com/ChatGPT');
    let clear_local_storage_result = await page.evaluate(() => {
      try {
        localStorage.clear();
        localStorage.setItem('cleared', 'helloworld');
        sessionStorage.clear();
        sessionStorage.setItem('cleared', 'helloworld');
        return 'done';
      } catch (error) {
        return 'error';
      }
    });

    console.log({ clear_local_storage_result });

    output = { ...output, state: DONE };

    return output;
  } catch (error) {
    output = { ...output, state: ERROR, error };
    myLogger.error(JSON.stringify(output));

    return output;
  }
}

module.exports = initChatGptPage;
