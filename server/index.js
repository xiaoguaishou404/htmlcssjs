const { resolve } = require("path");

const express = require("express");
const app = express();
app.use("/", express.static(resolve(__dirname, "../")));
app.listen(3333);
