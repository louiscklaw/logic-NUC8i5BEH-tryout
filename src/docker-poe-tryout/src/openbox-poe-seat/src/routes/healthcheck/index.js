const express = require('express');
const router = express.Router();

const { myLogger } = require('../../utils/myLogger');

myLogger.info('init healthcheck route');

router.get('/', (req, res) => {
  try {
    res.send('OK');
  } catch (error) {}
});

module.exports = router;
