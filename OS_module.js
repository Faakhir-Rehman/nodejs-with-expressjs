//OS Module
//It is a built-in module

const { log } = require('console');
const os = require('os')

//Information about the current user
const user = os.userInfo();
console.log(user);

//Get the up time of the computer/server in seconds
const upTime = os.uptime();
console.log(upTime);

//Get System Information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);