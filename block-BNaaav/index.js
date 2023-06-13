var http = require("http");
var fs = require("fs");

var server = http.createServer(handleRequest);

function handleRequest(req,res){

    if(req.url === "/" && req.method === "GET" ){
        let stream = fs.createReadStream("./index.html");
        stream.on("error",(err) => {
            res.writeHead(500,{"Content-Type":"text/plain"});
            res.end("Error in loading index.html")
        });

        res.writeHead(200,{"Content-Type":"text/html"})
        stream.pipe(res);
    }
    else if(req.url.split(".").pop() === "css"){

        let stream = fs.createReadStream("." + req.url);

        stream.on("error",(err) => {
            res.writeHead(500,{"Content-Type":"text/plain"});
            res.end("Error in loading css")
        });

        res.writeHead(200,{"Content-Type":"text/css"});
        stream.pipe(res);
    }
    else if(req.url === "/about" && req.method === "GET"){

        let stream = fs.createReadStream("./about.html");

        stream.on("error",(err) => {
            res.writeHead(500,{"Content-Type" : "text/plain"});
            res.end("Error in laoding in about.html");
        });

        res.writeHead(200,{"Content-Type":"text/html"});
        stream.pipe(res);
    }
    else if(req.url.split(".").pop() === "png"){
        let stream = fs.createReadStream("." + req.url)

        stream.on("error",(err) => {
            res.writeHead(500,{"Content-Type" : "text/plain"});
            res.end("Error in laoding in picture");
        });
        res.writeHead(200,{"Content-Type":"image/png"});
        stream.pipe(res)

    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Something Went Wrong!!")
        
    }
}



server.listen(3000,() => {
    console.log("server is listening on port 3000");
})

