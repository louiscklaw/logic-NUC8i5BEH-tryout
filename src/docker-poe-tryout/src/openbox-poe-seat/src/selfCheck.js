const { initBrowser } = require('./utils/initBrowser');

module.exports = async () => {
  console.log('helloworld self check');

  try {
    let browser = await initBrowser();
    await browser.close();
  } catch (error) {
    throw new Error('cannot find stub website');
  }
};
