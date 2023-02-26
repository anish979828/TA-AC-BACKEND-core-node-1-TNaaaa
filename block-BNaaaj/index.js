// console.log("Welcome to Node.js");

let os = require("os");

console.log(os.cpus().length,os.freemem(),os.uptime(),os.version());

let fs = require("fs");
// fs.readFile

// Q : -   Two methods for creating buffer is Buffer.alloc(),Buffer.allocUnsafe()

let buff1 = Buffer.alloc(12);
buff1.write("Hello World!")

 console.log(buff1.toString()) ;

/// http protocol
let url = require("url");

const parsedUrl = url.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`,true);

console.log(parsedUrl.query,parsedUrl.protocol,)
