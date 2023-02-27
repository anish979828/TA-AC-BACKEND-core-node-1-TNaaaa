let http = require("http");

http.createServer((req,res) =>{
    if(req.method == "GET" && req.url == "/"){
        res.write("Welcome to homepage");
        res.end();
    }
    else if(req.method == "GET" && req.url == "/about"){
        res.writeHead(201,{"Content-type":"text/html"});
        res.end('<h2>this is all about NodeJS</h2>')
    }else if(req.method == "POST" && req.url == "/about"){
        res.writeHead(201,{"Content-type": "application/json"})
        res.end(`{message: this is a post request}`)
    }else{
        res.writeHead(404,{"Content-type": "text/html"})
        res.write('<h2>page not found</h2>');
        res.end();
    }
}).listen(5000,() => {
    console.log("Server is litening on port 5k")
})