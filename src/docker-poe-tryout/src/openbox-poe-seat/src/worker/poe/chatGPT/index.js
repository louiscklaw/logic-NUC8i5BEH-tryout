require('dotenv').config();

// const express = require('express');
const fs = require('fs');

const { DEFAULT_ASK_ACCOUNT } = require('../../../config');
const { getRandomSecond } = require('../../../utils/getRandomSecond');
const { gptBotCooldown } = require('./gptBotCooldown');
const { initBrowser } = require('../../../utils/initBrowser');
const { testLanding } = require('./testLanding');
const { calculateMD5 } = require('../../../utils/calculateMD5');
const { poeDownAlert } = require('../../../utils/poeDownAlert');
const { CANONICAL_HOSTNAME } = require('../../../config');

const { checkIfOutOfQuota } = require(`../../../utils/checkIfOutOfQuota`);
const initChatGptPage = require('../../../utils/chatGPT/initChatGptPage');
const checkLoginState = require('../../../utils/chatGPT/checkLoginState');
const questionAndAnswer = require('../../../utils/chatGPT/questionAndAnswer');
const clearModalBox = require('../../../utils/chatGPT/clearModalBox');
const clearChatHistory = require('../../../utils/chatGPT/clearChatHistory');

async function chatGPTSolver(question_list, preprompts = []) {
  var output = { state: 'init', debug: {}, error: '' };

  let chat_history = { state: 'INIT', preprompts: [], history: [] };
  let answer_idx = -1;

  const browser = await initBrowser(DEFAULT_ASK_ACCOUNT);

  const page = (await browser.pages())[0];

  try {
    await initChatGptPage(page);
    output = { ...output, state: 'initChatGptPage done' };

    await checkLoginState(page);
    output = { ...output, state: 'checkLoginState done' };

    await checkIfOutOfQuota(page);
    output = { ...output, state: 'checkIfOutOfQuota done' };

    await clearChatHistory(page);
    output = { ...output, state: 'clearChatHistory done' };

    await clearModalBox(page);
    output = { ...output, state: 'clearModalBox done' };

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

    for (var i = 0; i < question_list.length; i++) {
      var question = question_list[i];
      answer_idx++;

      var answer = await questionAndAnswer(page, question, answer_idx);
      chat_history.history.push({ question, answer });

      // TODO: remove this
      // await page.waitForTimeout(getRandomSecond(5, 15) * 1000);
      await gptBotCooldown(getRandomSecond(5, 15), page);
    }

    chat_history = { ...chat_history, state: 'done' };

    await browser.close();
  } catch (error) {
    chat_history = { ...chat_history, state: 'error', error };

    var md5 = calculateMD5(error);
    var content = JSON.stringify({ question_list, preprompts, error, chat_history });
    var filename = `/logs/error/openbox-poe-seat/${md5},json`;
    fs.writeFileSync(filename, content, { encoding: 'utf8' });

    poeDownAlert(CANONICAL_HOSTNAME);

    if (browser?.close) await browser.close();

    throw error;
  }

  if (browser?.close) await browser.close();

  return chat_history;
}

module.exports = {
  testLanding,
  chatGPTSolver,
};
