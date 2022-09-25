//Path Module
//It is a built-in module

const path = require('path');

console.log(path.sep);

//Will go to this specified path
const filePath = path.join("/public", "/test foler", "test.txt");
console.log("Join Path: " + filePath);

//Will just return the base file name
const baseName = path.basename(filePath);
console.log("Basename: " + baseName);

//Will return an absoule path
const absoulePath = path.resolve(__dirname, 'public', "test folder", "test.txt");
console.log("Absolute Path: " + absoulePath);