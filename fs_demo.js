const fs = require ('fs');
const path = require('path');

// create folder

fs.mkdir(path.join(__dirname, '/test'),{}, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('folder created')
    }
});
/*
// create and write a file
fs.writeFile(path.join(__dirname, '/test','hello.txt'),'this is me bilal.',{}, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('file written...')
    }

});

// file append
fs.appendFile(path.join(__dirname, '/test','hello.txt'),' One day my dreams will come true',{}, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('file updated...')
    }
});
*/
//read file

fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8' , (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});    
//rename file
fs.rename(path.join(__dirname, '/test','hello.txt'),path.join(__dirname, '/test','index.txt'), (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('file renamed');
    }
});