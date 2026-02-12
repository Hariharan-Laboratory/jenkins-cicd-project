const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("🚀 Jenkins CI/CD Pipeline Working!");
});

server.listen(3000);

