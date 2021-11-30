// Import the functions you need from the SDKs you need
const myFunc = require("./fireFunc")
const http = require("http");
const express = require("express");
const app = express();
const router = express.Router();
app.use("/", router)

const hostname = '127.0.0.1';
const port = 9000;


app.get('/test', (req, res) =>{
    const data = myFunc.getAll();
    res.end("sadsadsa");
})


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


