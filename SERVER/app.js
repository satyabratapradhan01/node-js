// const http = require("http");
// const fs = require("fs");
// const url = require('url');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Hello form Home Page');
})

app.get("/about", (req, res) => {
    res.send('Hello From About Page. ' + 'HI ' + req.query.name);
})


app.listen(8080, ()=>{
    console.log('Server is Stated!')
})



// const myHandler = (req, res) => {
//     if(req.url === "/favicon.ico") return res.end("");
//   const log = `${Date.now()}: ${req.url} New Req Received\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, date) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("HomePage");
//         break;
//       case "/about":
//         const username = myUrl.query.userName;
//         res.end(`hi, ${username}`);
//         break;
//       case '/search':
//         const search = myUrl.query.search_query;
//         res.end('Here are your results for' + search)
//         break;
//       default:
//         res.end("404 not found");
//     }
//   });
// }
// const myServer = http.createServer(app);
// myServer.listen(8080, () => {
//   console.log("Server Started");
// });
