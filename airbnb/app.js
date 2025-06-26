// Core module
const path = require('path');

// external module 
const express = require("express");

// local module
const userRouter = require("./router/userRouter")
const hostRouter = require("./router/hostRouter")
const rootDir = require('./util/pathUtil')

const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'));
});

app.listen(port, () => {
  console.log(`server is listing port http://localhost:${port}`);
});
