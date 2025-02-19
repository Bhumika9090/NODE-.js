// const obj = require("./main1")
// console.log("i am main module");
// console.log(obj.fun1());
// console.log(obj.x);

// let a = 4;
// let b = 5;
// console.log(cal(a,b)); 

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end(" karthik loverboy");
});
server.listen("6548", () => {
  console.log("server is running");
});

