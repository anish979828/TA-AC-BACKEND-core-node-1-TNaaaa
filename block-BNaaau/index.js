// writeCode

// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object
let http = require("http");

function handleRequest(req,res){
    console.log(req,res);
}
let server = http.createServer(handleRequest);
server.listen(5000,() => {
    console.log("The server is listening on the port 5000")
});
// Q. create a node server 
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

function handleRequest(req,res){
   res.end("My first server in NOdeJS")
}
let server1 = http.createServer(handleRequest);

server1.listen(5001,() => {
    console.log("The server is listening on the port 5001")
});


// Q. write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.
function handleRequest(req,res){
    console.log(req.headers);
    res.end(req.headers["user-agent"])
 }
 let server2 = http.createServer(handleRequest);
 server2.listen(5555,() => {
     console.log("The server is listening on the port 5555")
 });

// Q. write code to create a node server 
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

function handleRequest(req,res){
    console.log(req.url,req.method);
    res.end(`${req.url} ${req.method}`)
 }
 let server3 = http.createServer(handleRequest);
 server3.listen(5566,() => {
     console.log("The server is listening on the port 5566")
 });

// Q. write code to create a node server 
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.
function handleRequest(req,res){
    res.end(JSON.stringify(req.headers));
    
 }
 let server4 = http.createServer(handleRequest);
 server4.listen(7000,() => {
     console.log("The server is listening on the port 7000")
 });

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.
function handleRequest(req,res){
    res.statusCode = 202;
    res.end(JSON.stringify(req.headers));
 }
 let server5 = http.createServer(handleRequest);
 server5.listen(3333,() => {
     console.log("The server is listening on the port 3333")
 });

// Q. create a server 
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

function handleRequest(req,res){
    res.setHeader("Content-type","text/html");
    res.end("<h3>Welcome to altcampus</h3>");
 }
 let server6 = http.createServer(handleRequest);
 server6.listen(8000,() => {
     console.log("The server is listening on the port 8000")
 });


// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

function handleRequest(req,res){
    res.writeHead(202,{"Content-type":"text/html"});
    res.end("<h3>Welcome to altcampus</h3>");
 }
 let server7 = http.createServer(handleRequest);
 server7.listen(8001,() => {
     console.log("The server is listening on the port 8000")
 });
// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})
function handleRequest(req,res){
    res.writeHead(202,{"Content-type":"application/json"});
    res.end("{success: true, message: 'Welcome to Nodejs'}");
 }
 let server8 = http.createServer(handleRequest);
 server8.listen(8888,() => {
     console.log("The server is listening on the port 8888")
 });

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`
function handleRequest(req,res){
    console.log(req.method);
    res.setHeader("Content-type","text/html");
    res.end("<h2>posted for first time</h2>");
 }
 let server9 = http.createServer(handleRequest);
 server9.listen(5050,() => {
     console.log("The server is listening on the port 5050")
 });


// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

function handleRequest(req,res){
    if(req.url == "/" && req.method == "GET"){
        res.setHeader("Content-type","text/plain");
        res.end("Anish");
    }
    if(req.url == "/about" && req.method == "GET"){
        res.setHeader("Content-type","text/html");
        res.end("<h2>anish</h2>");
    }else{
        res.statusCode = 404;
        res.end();
    }
 }
 let server10 = http.createServer(handleRequest);
 server10.listen(2345,() => {
     console.log("The server is listening on the port 2345")
 });
    

// Q. Handle 2 requests on same route with different method
// 1. GET on '/users' route where return a simple HTML form with name and email field
//  2. POST on '/users' route with a message 'Posted for the second time'.
let fs = require("fs");

function handleRequest(req,res){

  if(req.url == "/users" && req.method == "GET"){
  res.setHeader("Content-type","text/html");
        fs.createReadStream("./form.html").pipe(res);
    }else if(req.url == "/users" && req.method == "POST"){
  res.setHeader("Content-type","text/html");
        res.end("Posted for the second time");
    }else{
        res.statusCode = 404;
        res.end("page not found");
    }
 }
 let server11 = http.createServer(handleRequest);
 server11.listen(2000,() => {
     console.log("The server is listening on the port 2000")
 });



// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

let url = require("url");

function handleRequest(req,res){
    let parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl.url,req.url);

    if(req.url == `/users?email=nodeserver@gmail.com` && req.method == "GET"){
        res.setHeader("Content-type","application/json");
        res.end(JSON.stringify(parsedUrl.query));
   }
 let server12 = http.createServer(handleRequest);
 server12.listen(2345,() => {
     console.log("The server is listening on the port 2345")
 })
};

