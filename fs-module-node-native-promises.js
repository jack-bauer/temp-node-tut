const fs = require("fs");
const utils = require("util");
const path = require("path");
const { readFile, writeFile } = fs.promises;

const start = async (file1path, file2path, resultpath) => {
  try {
    const firstData = await readFile(file1path, "utf-8");
    const secondData = await readFile(file2path, "utf-8");

    await writeFile(
      resultpath,
      `Here's the async await Native node vsrion :\n\n ${firstData} \n ${secondData}`,
      { flag: "a" }
    );
  } catch (error) {
    console.error(error);
  }
};

start(
  path.join(__dirname, "content", "generic", "first.txt"),
  path.join(__dirname, "content", "generic", "second.txt"),
  path.join(__dirname, "content", "generic", "result-node-native-promises.txt")
);
