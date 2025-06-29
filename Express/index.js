const express = require('express');

const path = require('path');


// const {port} = require('./env.js');

require('dotenv').config();
const app = express();
const port = process.env.port || 3030;

const static = path.join(__dirname, "public", );
app.use(express.static(static))
// const __dirname = path.dirname(__filename);
// const homePagePath = path.join(require.main.filename)

app.get("/", (req, res) => {
    res.sendFile(index.html);
});

app.get("/about", (req, res) => {
   
    res.send("Helo About Page!");
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
