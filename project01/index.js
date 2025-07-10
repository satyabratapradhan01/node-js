const express = require("express");
const fs = require("fs");
let users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const connectMongoDb = require("./connection");
const logReqRes = require('./middlewares');

const { stringify } = require("querystring");
const { type } = require("os");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));



//Connection
connectMongoDb("mongodb://127.0.0.1:27017/satya")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

app.use(logReqRes('log.txt'));

app.get("/", (req, res) => {
  res.send("home page");
});
// Routes
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server is listing port no. ${port}`);
});
