// Core Module
const path = require('path')

// External module 
const express = require("express");
const hostRouter = express.Router();

// local module 
const rootDir = require('../util/pathUtil');

hostRouter.get("/add-home", (req, res, next) => {
 res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;
