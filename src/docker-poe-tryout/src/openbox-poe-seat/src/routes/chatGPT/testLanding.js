const express = require('express');
const router = express.Router();

const NO_QUESTION_FOUND = 'no question found';
const QUESTION_LIST_NOT_FOUND = 'question list not found';

const puppeteer = require('puppeteer-extra');

const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// require('dotenv').config();

const { testLanding } = require(`../../worker/poe/chatGPT`);

module.exports = router => {
  // NOTE: test with src/openbox-firefox/src/tests/chatGPT/helloworld
  router.get('/testLanding', async (req, res) => {
    var result = await testLanding();
    res.send(result);
    // res.send('helloworld')
  });
};
