const os = require("os");
const path = require("path");

//info about current user

const user = os.userInfo();

console.log(user);

//Returns syse uptime in seconds

console.log(`The system uptime in ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: (os.totalmem() / 1048576).toFixed(2) + " MB",
  freeMem: (os.freemem() / 1048576).toFixed(2) + " MB"
};

console.log(currentOs);

console.log(path.sep);
