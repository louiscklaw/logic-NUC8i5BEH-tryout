const { myLogger } = require('../myLogger');

async function clearChatHistory(page) {
  let output = { state: 'init', debug: {}, error: '' };
  try {
    myLogger.info('clearChatHistory start');

    // NOTE: clear chat history
    // ChatBreakButton_button__
    await page.waitForSelector('textarea[placeholder="Talk to ChatGPT on Poe"]');
    await page.type(
      'textarea[placeholder="Talk to ChatGPT on Poe"]',
      'Please forget everything and start a fresh talk.',
      { delay: 1 },
    );
    await page.waitForSelector('[class*="sendButton"]');
    await page.evaluate(() => {
      document.querySelector('[class*="sendButton"]').click();
    });

    await page.waitForSelector('[class*="ChatBreakButton_button__"]', { waitUntil: 'networkidle0' });
    await page.waitForSelector('[class*="Message_botMessageBubble__"]', { waitUntil: 'networkidle0' });
    await page.waitForTimeout(3 * 1000);
    await page.evaluate(() => {
      document.querySelector('[class*="ChatBreakButton_button__"]').click();
      document.querySelectorAll('[class*="Message_botMessageBubble__"]').forEach(item => item.remove());
    });

    myLogger.info('clearChatHistory done');
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));
  }
}

module.exports = clearChatHistory;
