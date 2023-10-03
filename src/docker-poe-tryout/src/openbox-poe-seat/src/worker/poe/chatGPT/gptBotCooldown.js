require('dotenv').config();

// const express = require('express');

// TODO: remove me
// const puppeteer = require('puppeteer-extra');
// const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
// puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());

const { UTILS_ROOT } = require('../../../config');
const { getRandomSecond } = require('../../../utils/getRandomSecond');
const { getRandomInt } = require('../../../utils/getRandomInt');
const { initBrowser } = require(`../../../utils/initBrowser`);

const {
  initChatGptPage,
  clearChatHistory,
  clearModalBox,
  questionAndAnswer,
  checkLoginState,
} = require(`../../../utils/chatGPT`);
const { myLogger } = require('../../../utils/myLogger');

async function gptBotCooldown(time_s, page) {
  try {
    myLogger.info('bot cooldown start');
    await page.waitForTimeout(time_s * 1000);

    myLogger.info('bot cooldown done');
  } catch (error) {
    myLogger.error('error during gptBotCooldown');
    throw error;
  }
}

module.exports = { gptBotCooldown };
