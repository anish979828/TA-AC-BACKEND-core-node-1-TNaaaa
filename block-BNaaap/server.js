let http = require("http");
http.createServer((req,res) => {
    res.statusCode = 404;
    res.setHeader("Content-type","text/html")
    res.end('<h1>anish</h1>')
    
}).listen(3000,() => console.log("we are leaning server"))

let server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.writeHead(200,{"Content-type": "text/html"});
    res.write("Hello");
    res.write("World");
    res.end();
};

server.listen(4444,() => {
    console.log("Hello world we are learning server")
})


