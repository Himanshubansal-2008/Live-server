const express = require('express');
const path = require('path')

const app = express();

let pathToFolder = path.join(__dirname, "public");

app.use(express.static(pathToFolder));

app.listen(3000);