// Import the functions you need from the SDKs you need
const myFunc = require("./fireFunc");
const http = require("http");
const express = require("express");
const app = express();
const router = express.Router();

const hostname = "127.0.0.1";
const port = 9000;

myFunc.listenToChange();

// app.get("/", (req, res) => {
//     res.end("root");
// });

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
