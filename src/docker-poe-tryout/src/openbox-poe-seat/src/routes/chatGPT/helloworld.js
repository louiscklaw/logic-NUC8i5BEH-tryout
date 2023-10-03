// NOTE: test with src/openbox-firefox/src/tests/chatGPT/helloworld

module.exports = router => {
  router.get('/helloworld', (req, res) => {
    res.send('openbox-poe-seat, Hello World!');
  });
};
