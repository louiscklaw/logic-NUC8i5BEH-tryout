require('dotenv').config();

const express = require('express');
const router = express.Router();

// require('./ask')(router);
require('./helloworld')(router);

module.exports = router;
