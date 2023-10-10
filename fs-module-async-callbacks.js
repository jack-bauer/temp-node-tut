const { log } = require("console");
const fs = require("fs");
const path = require("path");

const { readFile, writeFile } = fs;

// Callback Hell below

console.log("start....");

readFile(
  path.join(__dirname, "content", "generic", "first.txt"),
  "utf-8",
  (err, result) => {
    if (err) throw new Error(err);
    const firstFileData = result;

    readFile(
      path.join(__dirname, "content", "generic", "second.txt"),
      "utf-8",
      (err, result) => {
        if (err) throw new Error(err);
        const secondFileData = result;

        writeFile(
          path.join(__dirname, "content", "generic", "result-async.txt"),
          `Here's the result : ${firstFileData}. ${secondFileData}, the async way.....`,
          { flag: "a" },
          (err, result) => {
            if (err) throw new Error(err);
            console.log("File written sucssfully");
            console.log("Program ends...");
          }
        );
      }
    );
  }
);

console.log("Starting next task....");
