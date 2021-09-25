const fs = require('fs');

const requestHandler = (req, res) => {

  if (req.url === '/') {
    res.write(`<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academind</title>
    </head>
    <body>
    <h1>Hello world</h1>
    <form action="/message" method="POST">
              <label>Enter yout name: <input type="text" name="message"></label>
              <button type="submit">Send</button>
              </form>
    <a href="#">Testing the link</a>
    </body>
    </html>`);
    return res.end();
  }


  if (req.url === "/message" && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { console.log(chunk); body.push(chunk); });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        console.log(message);
        return res.end();
      });
    });
  }

  res.setHeader('Content-type', "text/html");
  res.write(`<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  <h1>Hello world</h1>
  <a href="#">Testing the link</a>
  </body>
  </html>`);
  res.end();

};

exports.handler = requestHandler;
