require('dotenv').config();

const express = require('express');
const router = express.Router();

require('./test')(router);

router.get('/', (req, res) => {
  res.send('summary helloworld');
});

module.exports = router;
