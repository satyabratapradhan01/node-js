const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.send("hello satya....")
});

app.get("/contactUs", (req, res) => {
    res.send(`
        <h1>Please Give Your Details Here</h1>
        <form action="/contactUs" method="post">
            <input type="text" name="name" placeholder="Enter Your Name" />
            <input type="text" name="email" placeholder="Enter Your Email" />
            <input type="submit" />
        </form>
    `);
});

app.post("/contactUs", (req, res) => {
    console.log(req.body)
    
    res.send(`<h1>submit succesfully</h1> ${req.body.name}`);
});

app.listen(port, () => {
    console.log(`server is listing port http://localhost:${port}`);
})