let http = require("http");

http.createServer((req,res) => {
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
}).listen(3000);