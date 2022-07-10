const fs = require("fs");

const writeAndAppend = () => {
  console.log("writing and appending to the file");
  fs.writeFileSync("notepad.txt", "testing, testing, testing");
  fs.appendFileSync(
    "notepad.txt",
    " appending some more data to the notepad.txt file for testing"
  );
};

module.exports = writeAndAppend;
