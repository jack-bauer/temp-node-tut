const path = require("path");
const fs = require("fs");

const { readFile } = fs;

const getText = filepath => {
  return new Promise((res, rej) => {
    readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

getText(path.join(__dirname, "content", "generic", "first.txt"))
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    throw new Error(err);
  });
