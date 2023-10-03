const { myLogger } = require('../myLogger');

async function clearModalBox(page) {
  let output = { state: 'init', debug: {}, error: '' };
  try {
    // NOTE: clear modal box if any
    myLogger.info('clearModalBox.js: start');

    await page.waitForTimeout(1 * 1000);
    await page.evaluate(() => {
      try {
        document.querySelector('.ReactModal__Content').style.display = 'none';
        document.querySelector('.ReactModal__Overlay').style.display = 'none';
      } catch (error) {
        console.error('%o', error);
      }
    });
    await page.waitForTimeout(1 * 1000);

    myLogger.info('clearModalBox.js: done');
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));
  }
}

module.exports = clearModalBox;
