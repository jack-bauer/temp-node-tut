const path = require("path");

const filename = path.join(__dirname, "content", "generic", "text.txt");

const baseName = path.basename(filename);

console.log(baseName);

const absolute = path.resolve(filename);

console.log(absolute);
