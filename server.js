const http = require("http");   // 👈 ye line zaroori hai

const sayHello = (request, response) => {
  response.write("Hello from SayHello Function");
  response.end();
};

http.createServer(sayHello).listen(1000, () => {
  console.log("Server running at http://localhost:1000");
});