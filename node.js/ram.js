const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end(" karthik loverboy");
});
server.listen("6548","192.168.1.19", () => {
  console.log("server is running");
});