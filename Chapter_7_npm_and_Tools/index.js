const express = require('express');
const app = express();
const port = 8080;
const path = require('path')

const rootDir = require('./util/pathUtil')

app.use(express.urlencoded())

app.get("/contactUs", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"));
});

app.post("/contactUs", (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

app.use((req, res, next) => {
    res.status(404).send("error 404");
})


app.listen(port, (req, res) => {
    console.log(`server is listing port http://localhost:${port}`);
})