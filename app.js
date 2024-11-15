const express = require("express");
const database = require("./database.js")

database();

const app = express();

app.get("/", (req, res) => {
    res.send('Welcome to express')
})

app.get("/listen", (req, res) => {
    res.send('This is a test page.')
})

app.get("/demo",(req,res)=>{
    //
})
app.listen(5000, () => {
    console.log(`listening on port 5000`)
})