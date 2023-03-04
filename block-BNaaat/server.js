let http = require("http");

let fs = require("fs");

http.createServer((req,res) => {
    
    if(req.url == "/file" && req.method == "GET"){
        fs.readFile("./node.html",(err,content) => {
            if(err) console.log(err);
            res.writeHead(201,{'Content-Type': 'text/html'});
            res.end(content);
        })
    }else if(req.url == "/stream"){
        fs.createReadStream("./node.html").pipe(res);
    }else{
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>Page not found</h1>");
    }
    
}).listen(5000,() => {
    console.log("This server is running on port 5000");
})
