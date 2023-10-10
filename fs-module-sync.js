const { log } = require("console");
const fs = require("fs");
const path = require("path");
const { readFileSync, writeFileSync } = fs;

console.log("Program started");

const firstContent = readFileSync(
  path.join(__dirname, "content", "generic", "first.txt"),
  "utf-8"
); // second one is optional since default is utf-8

const secondContent = readFileSync(
  path.join(__dirname, "content", "generic", "second.txt"),
  "utf-8"
);

console.log(firstContent);
console.log(secondContent);

writeFileSync(
  path.join(__dirname, "content", "generic", "result.txt"),
  `Here's the result : ${firstContent}. \n\n ${secondContent}`,
  { flag: "a" } // flag to append content instead of overwriting
);

console.log("Program ended....");
