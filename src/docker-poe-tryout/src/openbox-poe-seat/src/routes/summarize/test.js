require('dotenv').config();

const NO_QUESTION_FOUND = 'no question found';
const QUESTION_LIST_NOT_FOUND = 'question list not found';

const { solverHelloworld } = require(`../../worker/poe/solverHelloworld`);

module.exports = router => {
  router.post('/test', async (req, res) => {
    var json_input = req.body;

    try {
      var { jobs_id, question_list } = json_input;
      // res.send(question_list)
      if (!question_list) throw new Error(QUESTION_LIST_NOT_FOUND);
      if (question_list?.length < 1) throw new Error(NO_QUESTION_FOUND);
      // NOTE: question list valid after this line

      var temp_history = await solverHelloworld(question_list, jobs_id);

      res.send({
        state: 'helloworld done',
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
  });
};
