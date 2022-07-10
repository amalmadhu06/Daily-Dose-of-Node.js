const validator = require("validator");

const writeAndAppend = require("./server.js");
writeAndAppend();

console.log(validator.isEmail("amal@gmail.com"));
console.log(validator.isEmail("123.com"));

console.log(process.argv);
