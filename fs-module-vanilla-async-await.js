const path = require("path");
const fs = require("fs");

const { readFile, writeFileSync } = fs;

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

// getText(path.join(__dirname, "content", "generic", "first.txt"))
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     throw new Error(err);
//   });

const start = async (firstFilePath, secondFilePath, writeFilePath) => {
  try {
    const firstText = getText(firstFilePath);
    const secondText = getText(secondFilePath);

    await Promise.all([firstText, secondText]).then(data => {
      const firstFileData = data[0];
      const secondFileData = data[1];

      writeFileSync(
        writeFilePath,
        `here's the data using Vanilla async await: ${firstFileData}. \n\ ${secondFileData}`,
        { flag: "a" } // flag to append content instead of overwriting
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start(
  path.join(__dirname, "content", "generic", "first.txt"),
  path.join(__dirname, "content", "generic", "second.txt"),
  path.join(__dirname, "content", "generic", "result-vanilla-promises.txt")
);
