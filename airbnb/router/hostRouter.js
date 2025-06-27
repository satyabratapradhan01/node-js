// Core Module
const path = require('path')

// External module 
const express = require("express");
const hostRouter = express.Router();

// local module 
const rootDir = require('../util/pathUtil');
const { getAddHome, postAddHome } = require('../controllers/homes');

hostRouter.get("/add-home", getAddHome);

// const registereHomes = [];

hostRouter.post("/add-home", postAddHome);

exports.hostRouter = hostRouter;
// exports.registereHomes = registereHomes;
