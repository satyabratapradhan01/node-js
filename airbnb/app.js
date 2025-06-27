// Core module
const path = require('path');

// external module 
const express = require("express");

// local module
const userRouter = require("./router/userRouter")
const {hostRouter} = require("./router/hostRouter")
const rootDir = require('./util/pathUtil');
const { getError } = require('./controllers/homes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const port = 8080;

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(getError);

app.listen(port, () => {
  console.log(`server is listing port http://localhost:${port}`);
});
