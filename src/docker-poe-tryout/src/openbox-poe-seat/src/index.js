require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

// const { FIREFOX_DATA_DIR, CHROME_DATA_DIR } = process.env;
// const { PROMPT_ROOT, ERROR_ROOT } = require('./config');

const { myLogger } = require('./utils/myLogger');
const { reportOffline } = require('./utils/reportPoeSeatOffline');
const { reportOnline } = require('./utils/reportPoeSeatOnline');

const app = express();
app.use(bodyParser.json());

// NOTE: original use puppeteer core only
// const puppeteer = require('puppeteer-core');
const puppeteer = require('puppeteer-extra');
const selfCheck = require('./selfCheck');

// TODO: resume seat table
// const { reportOffline } = require('./utils/reportPoeSeatOffline');
// const { reportOnline } = require('./utils/reportPoeSeatOnline');

try {
  const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
  puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

  const StealthPlugin = require('puppeteer-extra-plugin-stealth');
  puppeteer.use(StealthPlugin());

  // await selfCheck();

  // NOTE: abonded ?
  app.use('/summarize', require('./routes/summarize'));
  // NOTE: abonded ?

  app.use('/chatGPT', require('./routes/chatGPT'));
  app.use('/googlePalm', require('./routes/googlePalm'));
  app.use('/stealthCheck', require('./routes/stealthCheck'));
  app.use('/hello', require('./routes/hello'));

  app.use('/healthcheck', require('./routes/healthcheck'));

  reportOnline();

  // Start the server
  app.listen(3000, () => {
    myLogger.info('Server is running on port 3000');
  });
} catch (error) {
  console.log(error);
  myLogger.error(JSON.stringify(error));

  reportOffline();
}
