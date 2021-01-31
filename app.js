// var functions = require('./functions');
// functions.helloWorld();

// const http = require("http");
// const handler = (request, response) => {
//     console.log("Sample message");
//     response.end("Hello World")
// }


const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require('path')

app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
app.get("/", function (req, res){
    res.render("index", {
        pageTitle: "Lesson 1"
    });
})

app.get("/", function (req, res){
    res.send("Website")
})

app.listen(port, (err) => {
    if (err) {return console.log("Error:", err)}
    console.log(`server works on ${port} server`)
})