//Modules - Encapsulate Code Files
//Every File in Node is a module
//Encapsulating Variables

const firstname = "Faakhir";
const lastname = "Rehman";

//Method 1
module.exports = { firstname, lastname };

//Method 2
const someobject = {
    name: "Faakhir",
    age: 19
}
module.exports.objectname = someobject;

//Method 3
module.exports.someobject = {
    name: "Faakhir",
    age: 20
}

