//Modules - Encapsulate Code Files
//Every File in Node is a module
//Encapsulating Functions

const someFunction1 = (para) => {
    console.log(para + " is here!");
}

const someFunction2 = (para) => {
    console.log(para + " is here Too!");
}

module.exports = { someFunction1, someFunction2 };


/* 
    A Function module can also be exported using 
    the following method:
*/

module.exports.functionname = (para) => {
    console.log(para + " is here Three!");
}

