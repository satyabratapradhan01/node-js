//Core Modules
const path = require('path');

// External module 
const express = require('express');
const userRouter = express.Router();

// local module 
const rootDir = require('../util/pathUtil');

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html')); 
});

module.exports = userRouter;