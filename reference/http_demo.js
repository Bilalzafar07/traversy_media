const http = require ('http');

//create server object
http.createServer((req, res) =>{

    res.write('hello world');
    res.end();
}).listen(80, ()=>console.log('Server running....'));