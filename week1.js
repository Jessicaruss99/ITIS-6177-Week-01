//create a simple NodeJS "Hello World"
console.log("Hello World");

//create a simple NodeJS server
var http = require ('http');
var server = http.createServer(function (req, res){
    res.writeHead(200);
    res.end("Hello World 2");

});
server.listen(8080);