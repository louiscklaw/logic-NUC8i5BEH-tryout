const fetch = require('node-fetch');
const helloworld = require('./helloworld');
const chatHistory = require('./chatHistory');
const newChat = require('./newChat');
const appendChat = require('./appendChat');

module.exports = { helloworld, chatHistory, newChat, appendChat };
