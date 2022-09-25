const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');
//Moludes can also be called in this way
//const fs = require('fs');

const first = readFileSync(__dirname + '/public/' + "first.txt", "utf8");
const second = readFileSync(__dirname + '/public/' + "second.txt", "utf8");

console.log(first);
console.log(second); 

writeFileSync(
    __dirname + '/public/write-file-one.txt', //Path of the file
    `File Created!, ${first}/n`, //Content of the file
    { flag: 'a'} //If you want to append to an already existing file then you set the flag as 'a'. (the flag property is an object)
)