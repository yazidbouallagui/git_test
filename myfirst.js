var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'texthtml'});
  res.end('Hello Intellisec!');
}).listen(8080);
// this is an extra line