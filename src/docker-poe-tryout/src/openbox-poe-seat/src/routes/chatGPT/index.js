require('dotenv').config();

const express = require('express');
const router = express.Router();

// require('./ask_with_md')(router);
require('./ask')(router);
require('./testLanding')(router);
require('./helloworld')(router);

module.exports = router;
