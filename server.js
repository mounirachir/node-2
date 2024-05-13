const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>Hello Node!</h1>\n");
});

server.listen(3000, () => console.log("this server runs on the port 3000"));
