const { log } = require("console");
const http  = require("http");
const server = http.createServer((req,res)=>{
    res.write("hello world");
    res.end("respones provided")
})
server.listen("3101",()=>{
    console.log("server is running")
})