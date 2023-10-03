require('dotenv').config();

const puppeteer = require('puppeteer-extra');

const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const { initGooglePaLMPage, clearChatHistory, clearModalBox, questionAndAnswer, assertKeyWord } = require(
  `../../../utils/googlePalm`,
);
const { DEFAULT_ASK_ACCOUNT } = require('../../../config');
const { myLogger } = require('../../../utils/myLogger');
const { initBrowser } = require('../../../utils/initBrowser');
const { checkIfOutOfQuota } = require('../../../utils/checkIfOutOfQuota');
const checkLoginState = require('../../../utils/googlePalm/checkLoginState');
const { gptBotCooldown } = require('../chatGPT/gptBotCooldown');
const { getRandomSecond } = require('../../../utils/getRandomSecond');

async function googlePalmSolver(question_list, preprompts = []) {
  let output = { state: 'init', debug: { question_list, preprompts, DEFAULT_ASK_ACCOUNT }, error: '' };
  let chat_history = { state: 'INIT', preprompts: [], history: [] };
  let answer_idx = -1;

  try {
    output = {
      ...output,
      debug: {
        question_list,
        preprompts,
      },
    };

    const browser = await initBrowser(DEFAULT_ASK_ACCOUNT);
    const page = (await browser.pages())[0];

    await initGooglePaLMPage(page);
    await checkLoginState(page);

    await checkIfOutOfQuota(page);

    await clearChatHistory(page);
    await clearModalBox(page);

    // TODO: need to handle "message cannot send"
    if (preprompts.length > 0) {
      for (var i = 0; i < preprompts.length; i++) {
        var question = preprompts[i];
        answer_idx++;

        var answer = await questionAndAnswer(page, question, answer_idx);
        chat_history.preprompts.push({ question, answer });

        // TODO: remove this
        // await page.waitForTimeout(getRandomSecond(5, 15) * 1000);
        await gptBotCooldown(getRandomSecond(5, 15), page);
      }
    }
    myLogger.info('preprompt session done');

    for (var i = 0; i < question_list.length; i++) {
      var question = question_list[i];
      answer_idx++;

      var answer = await questionAndAnswer(page, question, answer_idx);
      chat_history.history.push({ question, answer });

      // TODO: remove this
      // await page.waitForTimeout(getRandomSecond(5, 15) * 1000);
      await gptBotCooldown(getRandomSecond(5, 15), page);
    }
    myLogger.info('question session done');

    chat_history = { ...chat_history, state: 'done' };

    if (browser?.close) await browser.close();
  } catch (error) {
    output = { ...output, error };
    myLogger.error(JSON.stringify(output));
    throw error;
  }
}

module.exports = googlePalmSolver;
