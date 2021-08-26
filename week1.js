//create a simple NodeJS "Hello World"
console.log("Hello World");

//create a simple NodeJS server
var http = require ('http');
var server = http.createServer(function (req, res){
    res.writeHead(200);
    res.end("Hello World 2");

});
server.listen(8080);

//create a git ignore file
//create a nodejs server using express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
res.send("Hello World 3");
});

app.listen(port, () =>{
console.log(`Hello World listening at localhost:${port}`)
});
