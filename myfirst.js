var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'texthtml'});
  res.end('Hello World!');
}).listen(8080);