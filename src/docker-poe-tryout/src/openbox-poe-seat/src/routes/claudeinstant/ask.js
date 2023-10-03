// NOTE: test with src/openbox-firefox/src/tests/chatGPT/helloworld

const { ASK_DONE } = require('../../constants');
const { QUESTION_LIST_NOT_FOUND, NO_QUESTION_FOUND } = require('../../error');
const { googlePalmSolver } = require('../../worker/poe/googlePalm');

module.exports = router => {
  router.post('/ask', async (req, res) => {
    var json_input = req.body;

    try {
      var { question_list, preprompts } = json_input;
      // res.send(question_list)
      if (!question_list) throw new Error(QUESTION_LIST_NOT_FOUND);
      if (question_list?.length < 1) throw new Error(NO_QUESTION_FOUND);
      // NOTE: question list valid after this line

      var temp_history = await googlePalmSolver(question_list, preprompts);

      res.send({
        state: ASK_DONE,
        json_input,
        chat_history: {
          q_and_a: temp_history,
        },
      });
    } catch (error) {
      console.log(error);

      if (error.message == NO_QUESTION_FOUND) {
        res.send({ state: 'hello no question found' });
        return;
      }

      res.send({ state: 'unknown error', error_messge: error.message });
    }

    // res.send({ 'state': "unknown error", error_messge: error.message });
    // res.send({ 'hello': "google Palm" })
  });
};
