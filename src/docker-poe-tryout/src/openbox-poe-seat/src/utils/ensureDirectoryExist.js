const fs = require('fs');
const { myLogger } = require('./myLogger');

async function ensureDirectoryExist(dir_wanted) {
  try {
    await fs.mkdirSync(dir_wanted, { recursive: true });
  } catch (error) {
    myLogger.error('error during create directory');
    myLogger.error(JSON.stringify(dir_wanted));
  }
}

module.exports = { ensureDirectoryExist };
