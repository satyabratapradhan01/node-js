//Core Modules
const path = require('path');

// External module 
const express = require('express');
const userRouter = express.Router();

// local module 
const rootDir = require('../util/pathUtil');
const { getHome } = require('../controllers/homes');


userRouter.get("/", getHome);

module.exports = userRouter;