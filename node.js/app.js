const http = require("http")
const url =  require("url")
const fs = require("fs")
const server =  http.createServer((req,res)=>{
    if (req.method == "GET"){
        // let body = "" 
        // req.on("data",(chunk)=>{
        // body+= chunk.toString();
        // console.log(body);
        // res.end();
        
        // });
        // req.on("error",(err)=>{
        //     console.log(err)
        //     res.write(err)
        // })
        // req.on("end",()=>{
        //     res.end("data received");
        // });
        fs.readFile("./sample.txt","utf8",(err,data)=>{
            if(err){
                console.log(err);
                res.write(err);
                res.end();   
            }
            else{
                console.log(data);
                res.write(data);
                res.end(); 
            }
        })

        fs.readFile("./sample1.txt","utf8",(err,data)=>{
            if(err){
                console.log(err);
                res.write(err);
                res.end();   
            }
            else{
                console.log(data);
                res.write(data);
                res.end(); 
            }
        })
     }
    });

        server.listen("3105",()=>{
            console.log("surver running")
        });
