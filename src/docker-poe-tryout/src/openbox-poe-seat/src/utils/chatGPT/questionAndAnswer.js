const { myLogger } = require('../myLogger');

async function questionAndAnswer(page, question, answer_idx) {
  let output = { state: 'init', debug: {}, error: '' };
  try {
    const countAnswerBubble = page => {
      return page.evaluate(() => {
        return document.querySelectorAll('[class*="Message_botMessageBubble__"]').length;
      });
    };

    var current_answer_bubble_length = await countAnswerBubble(page);
    var new_answer_bubble_length = 0;

    var list_lines = question.split('\n');
    for (var i = 0; i < list_lines.length; i++) {
      await page.type('textarea[placeholder="Talk to ChatGPT on Poe"]', list_lines[i], { delay: 1 });
      await page.keyboard.down('ShiftLeft');
      await page.keyboard.down('Enter');
      await page.keyboard.up('Enter');
      await page.keyboard.up('ShiftLeft');
    }

    myLogger.info('chatGPT.js: wait for send button ready');
    await page.waitForSelector('button[class*="sendButton"]:not([disabled])');
    myLogger.info('chatGPT.js: press send button');
    await page?.evaluate(() => {
      document.querySelector('button[class*="sendButton"]:not([disabled])').click();
    });

    var reply = '...';
    await page.waitForSelector(`[class*="Message_botMessageBubble__"]`, { waitUntil: 'networkidle0' });
    // console.log({ current_answer_bubble_length, new_answer_bubble_length });

    for (var countdown = 10; countdown > 0; countdown--) {
      var new_answer_bubble_length = await countAnswerBubble(page);
      if (new_answer_bubble_length > current_answer_bubble_length) {
        // NOTE: new answer bubble appear
        break;
      } else {
        // NOTE: no new answer bubble appear, keep waiting
        await page.waitForTimeout(1 * 1000);
      }
    }
    myLogger.info('%o', { current_answer_bubble_length, new_answer_bubble_length });

    // NOTE: wait for text type complete
    await page.waitForTimeout(3 * 1000);
    var old_reply = '';
    const isTheBotStillTyping = (reply, old_reply) => reply != old_reply; // return true if the bot is typing

    var first_check = true;
    const isFirstCheck = () => {
      if (first_check) {
        first_check = false;
        return true;
      }
      return first_check;
    };

    for (var countdown = 60; countdown > 0; countdown--) {
      reply = await page.evaluate(answer_idx => {
        return document.querySelectorAll('[class*="Message_botMessageBubble__"]').item(answer_idx).textContent;
      }, new_answer_bubble_length - 1);

      if (countdown > 0 && reply.trim() == '...') {
        // bot not answer yet
        myLogger.info(JSON.stringify({ countdown, reply }));

        await page.waitForTimeout(1 * 1000);
      } else {
        if (isFirstCheck()) {
          myLogger.info('chatGPT.js: first check found');
          old_reply = reply;
          await page.waitForTimeout(1 * 1000);
        } else {
          // is the bot still typing ?
          if (isTheBotStillTyping(reply, old_reply)) {
            old_reply = reply;
            myLogger.info(`chatGPT.js: bot still typing, countdown:${countdown}`);
            // myLogger.info({ countdown, reply });
            await page.waitForTimeout(3 * 1000);
          } else {
            // bot not typing
            myLogger.info('chatGPT.js: bot typing done');
            break;
          }
        }
      }
    }

    return reply;
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(error));

    return 'error found during scraping reply';
  }
}

module.exports = questionAndAnswer;
