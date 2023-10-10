const http = require("http");

const PORT = 5000;

const server = http.createServer((request, response) => {
  // response.write("Welcome to our home page.");
  // response.end();

  if (request.url === "/") {
    response.end("Welcome to the home page");
  } else if (request.url === "/about") {
    response.end("Welcome to the About page");
  } else if (request.url === "/contact") {
    response.end("Welcome to the Contact page");
  } else {
    response.end(`<h1>404 Page does not exist ha ha</h1>`);
  }
});

server.listen(PORT);
