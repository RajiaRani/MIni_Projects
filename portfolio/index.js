const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));