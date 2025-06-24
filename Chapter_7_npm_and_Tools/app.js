const express = require('express');
const app = express()
const PORT = 8080
app.use((req, res, next) => {
    console.log("Come in first middleware", req.url, req.method);
    next();
})
app.use((req, res, next) => {
    console.log("Come in second middleware", req.url, req.method);
    res.send("hello satya")
})
app.get("/satya", (req, res) => {
    res.send("hello satya");
})
app.listen(PORT, () => {
    console.log(`server running on address http://localhost:${PORT}`);
})