require('dotenv').config();

const NO_QUESTION_FOUND = 'no question found';
const QUESTION_LIST_NOT_FOUND = 'question list not found';

const { myLogger } = require('../../utils/myLogger');
const { checkInput } = require('./checkInput');
const { reportOffline } = require('../../utils/reportPoeSeatOffline');
const { ASK_INIT, ASK_DONE } = require(`../../constants`);
const { chatGPTSolver } = require(`../../worker/poe/chatGPT`);

module.exports = router => {
  router.post('/ask', async (req, res) => {
    var json_input = req.body;

    var output = {
      state: ASK_INIT,
      input: json_input,
      error: '',
      chat_history: { q_and_a: { preprompts: [], history: [] } },
    };

    try {
      checkInput(json_input);

      var { question_list, preprompts } = json_input;
      // res.send(question_list)

      // TODO: check using schema
      if (!question_list) throw new Error(QUESTION_LIST_NOT_FOUND);
      if (question_list?.length < 1) throw new Error(NO_QUESTION_FOUND);
      // NOTE: question list valid after this line

      var temp_history = await chatGPTSolver(question_list, preprompts);
      var { state, preprompts, history } = temp_history;
      if (state != 'done') throw new Error('error during ask ChatGPT');

      output = {
        ...output,
        state: ASK_DONE,
        json_input,
        chat_history: { q_and_a: { preprompts, history } },
      };
    } catch (error) {
      reportOffline();

      output = { ...output, state: ERROR, error: JSON.stringify(error) };

      myLogger.error(JSON.stringify(error));

      if (error.message == CHATGPT_OUT_OF_QUOTA) {
        myLogger.error('error chatgpt out of quota');
        output = { ...output, state: ERROR, error: CHATGPT_OUT_OF_QUOTA };
      } else {
        throw error;
      }
    }

    res.send(output);
  });
};
