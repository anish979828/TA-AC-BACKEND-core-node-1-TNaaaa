let http = require("http");
let url = require("url");

http.createServer((req,res) => {
    let parsedUrl = url.parse(req.url);
    if(req.method == "GET" && req.url == "/"){
        res.write("Welcome to homepage");
        res.end();
    }
    else if(req.method == "GET" && parsedUrl.pathname == "/about"){
        res.writeHead(201,{"Content-type":"text/html"});
        res.end('<h2>this is all about NodeJS</h2>')
    }else if(req.method == "POST" && parsedUrl.pathname == "/about"){
        res.end("this is post request")
    }else{
        res.writeHead(404,{"Content-type": "text/html"})
        res.write('<h2>page not found</h2>');
        res.end();
    }
}).listen(5000,() => {
    console.log("Server is litening on port 5k")
})