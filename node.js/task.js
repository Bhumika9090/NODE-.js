// usingggggg fs.writeFile *********
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method == "GET") {
//         res.write("GET request received");
//         res.end();
//     } else if (req.method == "POST") {
//         let ipData = "";

//         req.on("data", (chunk) => {
//             ipData += chunk.toString();
//         });

//         req.on("end", () => {
//             fs.writeFile("./sample1.txt", ipData, (err) => {
//                 if (err) {
//                     res.write(err.message);
//                 } else {
//                     res.write("Data inserted");
//                 }
//                 res.end();
//             });
//         });
//     }
// });

// server.listen(3201, () => {
//     console.log("Server running on port 3201");
// });







// usinggg fs.appendFile***************


// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method == "GET") {
//         res.write("GET request received");
//         res.end();
//     } else if (req.method == "POST") {
//         let ipData = "";

//         req.on("data", (chunk) => {
//             ipData += chunk.toString();
//         });

//         req.on("end", () => {
//             fs.appendFile("./sample1.txt", ipData, (err) => {
//                 if (err) {
//                     res.write(err.message);
//                 } else {
//                     res.write("Data inserted");
//                 }
//                 res.end();
//             });
//         });
//     }
// });

// server.listen(3201, () => {
//     console.log("Server running on port 3201");
// });


// addd  number into array
// const http = require("http");
// const fs = require("fs");
// const { parse } = require("path");

// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         fs.readFile("./data.json", "utf8", (err, data) => {
//             if(err){
//                 res.write(err);
//                 res.end();
//             }
//             else{
//             res.writeHead(200, { "Content-Type": "application/json" });
//             // console.log(typeof JSON.parse(data));
//             // res.write(data);
//             // res.end();
//             let existingData = JSON.parse(data);
//             existingData.push(5)
//             console.log(existingData);
//             fs.writeFile("./data.json",JSON.stringify(existingData),(err)=>{
//                 if(err){
//                     res.write(err);
//                     res.end();
//                 }
//                 else{
//                     res.write("data updateing")
//                     res.end()
//                 }
//             })
        
//             }

//         });
//     }
// });

// server.listen(3201, () => {
//     console.log("Server running on port 3201");
// });















// adding names into arrayyyyyyyy



// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "POST") {
//         fs.readFile("./data.json", "utf8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({ error: err.message }));
//             } else {
//                 let newName = "bhumiiii";
//                 let existingData = JSON.parse(data);
//                 existingData.push(newName);
//                 fs.writeFile("./data.json", JSON.stringify(existingData, null, 2), (err) => {
//                     if (err) {
//                         res.writeHead(500, { "Content-Type": "application/json" });
//                         res.end(JSON.stringify({ error: err.message }));
//                     } else {
//                         res.writeHead(200, { "Content-Type": "application/json" });
//                         res.end(JSON.stringify({ message: "Data updated successfully" }));
//                     }
//                 });
//             }
//         });
//     }
// });

// server.listen(3201, () => {
//     console.log("Server running on port 3201");
// });











// adding the objecttttttttt


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "GET"){
        fs.readFile("./user.json", "utf8", (err, data) => {
            if (err) {
                res.end(err);
            } else {
                console.log(data);
                res.writeHead(200,"ok",{"content-type":"appication/jsons"})
                res.write(data);
                res.end()
            }    
        });
    }
    else if(req.method == "POST"){
        let ipData = ""
        req.on("data",(chunk)=>{
             ipData += chunk .toString();
        
        })
        req.on("end",()=>{
            ipData = JSON.parse(ipData)
        })
        fs.readFile(
            
        )
    }
});
server.listen(3201, () => {
    console.log("Server running on port 3201");
});


















































