const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, date) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Satyabrata Pradhan");
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8080, () => {
  console.log("Server Started");
});
