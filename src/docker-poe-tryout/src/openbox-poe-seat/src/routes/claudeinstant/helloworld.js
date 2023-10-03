module.exports = router => {
  router.get('/helloworld', (req, res) => {
    res.send('claudeinstant/helloworld.js');
  });
};
