const checkLoginState = require('./checkLoginState');
const assertKeyWord = require('./assertKeyWord');
const questionAndAnswer = require('./questionAndAnswer');
const clearModalBox = require('./clearModalBox');
const clearChatHistory = require('./clearChatHistory');
const initChatGptPage = require('./initChatGptPage');
const tackleCloudflare = require('./tackleCloudflare');
const helloworld = require('./helloworld');

module.exports = {
  helloworld,
  tackleCloudflare,
  initChatGptPage,
  clearChatHistory,
  clearModalBox,
  questionAndAnswer,
  assertKeyWord,
  checkLoginState,
};
