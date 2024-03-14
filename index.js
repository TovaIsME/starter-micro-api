var http = require('http');
http.createServer(function (req, res) {
    res.write('Working in the background nigga');
    console.log('starting');

}).listen(process.env.PORT || 3000);

async function sendRequest() {
  const url = 'https://api.telegram.org/bot7039381598:AAHhYLGtfT5OCCSl9vn8P997u51usB7-xB0/sendMessage?chat_id=5939339782&text=GetFuckedStopHacking';
  try {
      const response = await fetch(url);
      const text = await response.text();
      console.log(text);
  } catch (error) {
      console.error('Error:', error);
  }
}

sendRequest();

setInterval(sendRequest, 5000);
