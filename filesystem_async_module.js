const { log } = require('console');
const { readFile, writeFile } = require('fs');

readFile(__dirname + '/public/' + 'first.txt', 'utf8', function(err, result) {
    if(err){
        console.log(err);
        return;
    } 

    const first = result;

    readFile(__dirname + '/public/' + 'second.txt', 'utf8', function(err, result) {
        if(err){
            console.log(err);
            return;
        } 
    
        const second = result;

        writeFile(__dirname + '/public/writefileasync.txt',
        `File Created!, ${first}`, //Content of the file
        { flag: 'a' }, //If you want to append to an already existing file then you set the flag as 'a'. (the flag property is an object)
        (err, result) => {
            if(err){
                console.log(err);
                return;
            } 
        }
        )
    })
})