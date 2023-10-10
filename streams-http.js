const http = require("http");
const fs = require("fs");
const path = require("path");
const { createReadStream, readFileSync } = fs;

const PORT = 5000;
const filepath = path.join(__dirname, "content", "generic", "big-data.json");

const server = http.createServer((req, res) => {
  // const text = readFileSync(
  //   path.join(__dirname, "content", "generic", "big-data.json")
  // );
  const fileStream = createReadStream(filepath, "utf-8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });

  fileStream.on("error", error => res.end(error));
});

server.listen(PORT);
