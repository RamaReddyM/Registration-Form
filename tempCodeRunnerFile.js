var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()
app.get("/",(req,res) => {
res.send("Server Connection is sucessful")
}).listen(3000);
console.log("listrning on port 3000")