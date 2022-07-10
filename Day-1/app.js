const validator = require("validator");

const writeAndAppend = require("./server.js");
writeAndAppend();

console.log(validator.isEmail("email_id"));
console.log(validator.isEmail("password"));

console.log(process.argv);
