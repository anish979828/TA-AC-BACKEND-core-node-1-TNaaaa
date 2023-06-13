// var http = require('http');
// var fs = require('fs');

// function handleRequest(req, res) {
//   var extension = req.url.split('.').pop();
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(201, { 'content-type': 'text/html' });
//     fs.createReadStream('./index.html').pipe(res);
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.writeHead(201, { 'content-type': 'text/html' });
//     fs.createReadStream('./about.html').pipe(res);
//   } else if (['png', 'jpg', 'jpeg', 'svg'].includes(extension)) {
//     res.setHeader('Content-Type', 'images/' + extension);
//     fs.createReadStream('./assets/' + req.url).pipe(res);
//   } else if (req.url === '/style.css') {
//     res.setHeader('Content-Type', 'text/css');
//     fs.createReadStream('./stylesheet' + req.url).pipe(res);
//   } else {
//     res.end('welcome');
//   }
// }

// let server = http.createServer(handleRequest);
// server.listen(5000, () => {
//   console.log('Server is listening on port 5000');
// });