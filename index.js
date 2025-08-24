// require("dotenv").config()
// import {sum,diff} from "./lib.js";
// console.log(sum(3,4),diff(5,4));
// const fs=require("fs");
// const t1=performance.now();
// const txt=fs.readFileSync("sample.txt","utf-8");
// console.log(txt)
// fs.readFile("sample.txt","utf-8",(err,txt)=>{
//     console.log(txt);
// })
// console.log("Hello");

// const t2=performance.now();
// console.log(t2-t1);
// const http = require("http");
// const data = {
//     age: 5
// }
// const fs = require("fs")
// const page = fs.readFileSync("index.html", "utf-8")
// const data2 = JSON.parse(fs.readFileSync("product.json", "utf-8"));
// const products = data2.products;
// const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type","application/json")
    // res.end(JSON.stringify(data))
    // const rurl = req.url;

//     if (rurl == "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end("<h1>What would you like to search for?</h1>");
//     } else if (rurl == "/api") {
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(data2));
//     } else if (rurl.startsWith("/product")) {
//         const index = Number(rurl.split('/')[2])
//         const product = products[index - 1];
//         const modifiedpage = page.replace("**url**", product.thumbnail)
//         .replace("**title**", product.title)
//         .replace("**price**", product.price)
//         .replace("**rating", product.rating);
//         res.setHeader("Content-Type", "text/html");
//         res.end(modifiedpage);
//     }else{
//         res.writeHead(404,"Page Not Found");
//     }
// });
// server.listen(8080);
const mongoose = require('mongoose');
const express=require("express");
const path=require('path');
// const morgan = require('morgan');
const cors = require('cors');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productrouter=require("./router/product");

const server=express();
server.use(cors())
server.use(express.json())
// server.use(morgan("default"))
server.use("/products",productrouter.router);
server.use(express.static(path.resolve(__dirname,'product-app','dist')));

// const auth=server.use((req,res,next)=>{
    // console.log(req.method,req.hostname,req.get("User-Agent"))
    // next()
    // if(req.query.password=="123"){
    //     next()
    // }else{
    //     res.sendStatus(401)
    // }
    // if(req.body.password=="123"){
    //     next()
    // }else{
    //     res.sendStatus(401)
    // }
//     next();
// })
// server.get("/",auth,(req,res)=>{
    // res.send("Hello")
    // res.sendFile("C:\\Users\\princ\\OneDrive\\Desktop\\node JS\\index.html");
    // res.json(products)
    // res.sendStatus(404)
    // res.status(201).send("Hello")
//     res.json({type:"get"})

// })
// server.get("/product/:id",(req,res)=>{
//     console.log(req.params);
//     res.json({type:"get"});
// })

// server.post("/",(req,res)=>{
//     res.json({type:"post"})
//     console.log(req.body)
// })
// server.put("/",(req,res)=>{
//     res.json({type:"put"})
// })
// server.delete("/",(req,res)=>{
//     res.json({type:"delete"})
// })
// server.patch("/",(req,res)=>{
//     res.json({type:"patch"})
// })



server.listen(()=>{
    console.log("server started");
})