//Importing Modules
const printName = require("./variable_module");
const functions = require("./function_module");

console.log(functions);
console.log(printName);


//Using the modules
functions.someFunction1(printName.firstname);
functions.someFunction2(printName.lastname);
functions.functionname(printName.someobject.name);