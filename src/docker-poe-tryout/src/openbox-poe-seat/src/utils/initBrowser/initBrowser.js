const { CHROME_DATA_DIR, DEFAULT_DATA_DIR } = require('../../config');
const { myLogger } = require('../myLogger');

const initStealthing = require('./initStealthing');
const testStealthing = require('./testStealthing');

const puppeteer = require('puppeteer-extra');

const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function initBrowser(chrome_data_dir) {
  let output = { state: 'init', debug: {}, error: '' };

  if (chrome_data_dir == undefined) {
    chrome_data_dir = CHROME_DATA_DIR + '/' + DEFAULT_DATA_DIR;
  } else {
    chrome_data_dir = CHROME_DATA_DIR + '/' + chrome_data_dir;
  }

  myLogger.info('using data_dir: ' + chrome_data_dir);

  try {
    var browser = await puppeteer.launch({
      product: 'chrome',
      headless: false,
      executablePath: '/usr/bin/google-chrome-stable',
      // slowMo: 1,
      // NOTE: https://wiki.mozilla.org/Firefox/CommandLineOptions
      defaultViewport: { width: 1024, height: 768 },
      ignoreHTTPSErrors: true,
      userDataDir: chrome_data_dir,
      args: [`--user-data-dir=${chrome_data_dir}`],
    });
    output = { ...output, debug: { ...output.debug, browser } };

    const page = (await browser.pages())[0];
    await initStealthing(page);
    await testStealthing(page);

    return browser;
  } catch (error) {
    output = { ...output, error };
    myLogger.error('error during initBrowser');
    myLogger.error(JSON.stringify(output));

    if (output.debug?.browser?.close) output.debug.browser.close();
    throw error;
  }
}

module.exports = initBrowser;
