//Core Modules
const path = require('path');

// External module 
const express = require('express');
const userRouter = express.Router();

// local module 
const rootDir = require('../util/pathUtil');
const { registereHomes } = require('./hostRouter');


userRouter.get("/", (req, res, next) => {
  console.log(registereHomes)
  res.render('home', {registereHomes});
});

module.exports = userRouter;