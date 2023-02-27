let http = require("http");

// http.createServer((request,response) => {
//     console.log(request,response);
//     response.end("Hey Anish")
// }).listen(4000,"localhost");

var server = http.createServer((handleRequest));

function handleRequest(req,res){
    res.end("Hello World")
};

server.listen(3000,() => {
    console.log("Server listening on 4000 port")
})
