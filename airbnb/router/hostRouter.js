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

const registereHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body.houseName);
  registereHomes.push({ houseName: req.body.houseName }); 

  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

exports.hostRouter = hostRouter;
exports.registereHomes = registereHomes;
