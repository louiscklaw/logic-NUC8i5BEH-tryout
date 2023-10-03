const { DEFAULT_DATA_DIR } = require('./config');
const { initBrowser } = require('./utils/initBrowser');

const { myLogger } = require('./utils/myLogger');

let data_dir = process.argv[2];

(async () => {
  console.log('start chrome js');
  if (data_dir == undefined) {
    data_dir = DEFAULT_DATA_DIR;
  }

  try {
    console.log('data_dir: ' + data_dir);
    const browser = await initBrowser(data_dir);
    const page = (await browser.pages())[0];

    await page.waitForTimeout(9999 * 1000);

    await page.close();
    await browser.close();
  } catch (error) {
    myLogger.error(JSON.stringify(error));
  }
})();
