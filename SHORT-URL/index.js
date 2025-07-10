const express = require('express');
const { connectToMongoDB } = require('./connect')
const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send("Hello Satya.....");
});

app.listen(port, () => {
    console.log(`App is listening on port no. ${port}`);
});