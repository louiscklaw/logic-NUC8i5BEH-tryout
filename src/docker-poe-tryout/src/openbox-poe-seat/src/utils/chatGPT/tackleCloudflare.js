// https://www.cointracker.io/
// https://www.g2.com/products/asana/reviews
async function tackleCloudflare(page) {
  try {
    // await page.goto('https://www.cointracker.io', {
    //   //wait for website to load
    //   waitUntil: 'load',
    // });

    // page.goto('https://www.g2.com/products/asana/reviews');

    // // https://bot.sannysoft.com
    page.goto('https://bot.sannysoft.com');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: '/share/testresult.png', fullPage: true });

    // // https://finviz.com/news.ashx
    // await page.goto('https://finviz.com/news.ashx', {
    //   //wait for website to load
    //   waitUntil: 'networkidle0'
    // });

    return 'init tackleCloudflare page';
  } catch (error) {
    return 'init tackleCloudflare page error';
  }
}

module.exports = tackleCloudflare;
