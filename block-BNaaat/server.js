let http = require("http");

let fs = require("fs");
http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("welcome anish")
    }else if(req.url == "/about"){
        fs.createReadStream("./index.html").pipe(res);
    }
    
}).listen(3000,()=> {
    console.log("We are creating a server")
})

