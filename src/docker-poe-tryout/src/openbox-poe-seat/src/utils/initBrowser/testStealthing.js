const assert = require('chai').assert;

async function testStealthing(page) {
  try {
    await page.goto('https://intoli.com/blog/not-possible-to-block-chrome-headless/chrome-headless-test.html');
    var webdriver_result = await page.evaluate(() => {
      return document.querySelector('#webdriver-result').textContent;
    });
    var chrome_result = await page.evaluate(() => {
      return document.querySelector('#chrome-result').textContent;
    });

    assert(webdriver_result == 'missing (passed)', 'webdriver should be missing !');
    assert(chrome_result == 'present (passed)', 'should present !');

    await page.goto('http://bait:8080/navigator_webdriver_test.html', { waitUntil: 'load' });
    webdriver_result = await page.evaluate(() => {
      return document.querySelector('#webdriver-result').textContent;
    });
    assert(webdriver_result == 'undefined', 'navigator.Webdriver not equal to undefined');
  } catch (error) {
    console.log('error during testStealthing');
    console.log(error);

    throw error;
  }
}

module.exports = testStealthing;
