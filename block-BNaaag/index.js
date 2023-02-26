let fs = require("fs");

fs.readFile("content.md",(err,content) => {
    console.log(content.toString());
});

fs.readFile("content.md",(err,content) => {
    for(let i = 0; i < 100000000; i++){

    }
    console.log(content.toString());
})

fs.readFile("content.md",(err,content) => {
    setTimeout(() => console.log(content.toString()),0);
});

let buff1 = Buffer.alloc(10);

console.log(buff1);
buff1.write("Welcome to Buffer!");
console.log(buff1.toString());