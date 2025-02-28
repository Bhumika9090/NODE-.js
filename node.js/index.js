// const http = require("http");
// console.log(http)

// const server = http.createServer((req, res) => {
//   res.write("hello world");
//   res.end(" karthik loverboy");
// });
// server.listen("3132", () => {
//   console.log("server is running");
// });








const http = require("http");
const url= require("url")
const server = http.createServer((req, res) => {
    const parsedURl= url.parse(req.url,true)
    console.log(parsedURl)
    const tickets=parsedURl.query.tickets
    if (req.method == "GET") {
        if (parsedURl.pathname == "/CHAAVA") {
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(JSON.stringify({ "movie name": "CHAAVA", screen: "one",numberoftickets:tickets}));
            res.end();
        } else if (parsedURl.pathname == "/THANDEL") {
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(JSON.stringify({ "movie name": "THANDEL", screen: "two",numberoftickets:tickets}));
            res.end();
        } else if (parsedURl.pathname== "/SKYFORCE") {
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(JSON.stringify({ "movie name": "SKYFORCE", screen: "three",numberoftickets:tickets}));
            res.end();
        } else {
            res.writeHead(400, "not found", { "content-type": "application/json" });
            res.write(JSON.stringify({ message: "movie not showing now" }));
            res.end();
        }
    } else if (req.method == "POST") {
        res.end();
    } else if (req.method == "PUT") {
        res.end();
    } else if (req.method == "DELETE") {
        res.end();
    } else {
        res.end();
    }
});
server.listen("3101",()=>{
    console.log("server running")
})










// const http = require("http")
// const url = require("url")
// const server1 = http.createServer((req,res)=>){
// const parsedURl = url.parse(req,url,true)
//   console.log(parsedURl);
// }
//   if(req.method == "GET"){
//     if(parsedURl .pathname == "/menu"){
//       res.writeHead(203, "ok", { "content-type": "application/json" });
//             res.write(JSON.stringify({ "veg": "gopi", items: "2",}));
//             res.end();
//     elseif(parsedURl.pathname == "/nonveg"){
//       res.writeHead(203, "ok", { "content-type": "application/json" });
//       res.write(JSON.stringify({ "nonveg": "chicken", items: "2",}));
//       res.end();

//     }      
//     }
//   }

//   server.listen("3111",()=>{
//     console.log("server running")
// })