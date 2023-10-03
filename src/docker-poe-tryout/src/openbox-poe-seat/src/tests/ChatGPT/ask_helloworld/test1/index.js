const fetch = require('node-fetch');

const customHeaders = {
  'Content-Type': 'application/json',
};

(async () => {
  var hello_result = await fetch('http://openbox-poe-seat1:3000/chatGPT/ask', {
    method: 'post',
    headers: customHeaders,
    body: JSON.stringify({
      question_list: ["say 'hello 1' to me"],
    }),
  });

  var hello_result_text = await hello_result.json();

  console.log(hello_result_text);

  // console.log('helloworld');
  process.exit();
})();
