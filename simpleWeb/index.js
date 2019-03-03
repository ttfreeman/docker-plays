const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send('Hello, I am node.js from that docker image')
})

app.listen(8080, ()=>console.log('app listening on port 8080'))
