const { error } = require("console");
const { createReadStream } = require("fs");
const path = require("path");

const stream = createReadStream(
  path.join(__dirname, "content", "generic", "big-data.json"),
  {
    highWaterMark: 45000000
    //encoing: "utf-8"
  }
);

stream.on("data", result => {
  console.log(result);
});

stream.on("error", error => console.log(error));
