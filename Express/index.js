const express = require('express');

const path = require('path');


// const {port} = require('./env.js');

require('dotenv').config();
const app = express();
const port = process.env.port || 3030;

const static = path.join(__dirname, "public", );
app.use("/public",express.static(static))


const __dirname = path.dirname(__filename);
const homePagePath = path.join(require.main.filename)
console.log(import.meta.dirname);


app.get("/public/:username", (req, res) => {
    console.log(req.params);
    res.send(`My userName is ${req.params.username}`);
});

app.get("/public/:username/article/:slug", (req, res) => {
    const formatedSlug = req.params.slug.replace(/-/g, " ")
    res.send(`Article ${req.params.username} by ${formatedSlug}`)
})

app.get("/about", (req, res) => {
    console.log(req.query)
    res.send("Helo About Page!");
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
