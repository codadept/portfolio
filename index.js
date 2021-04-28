var express = require("express");
var app = express();
var PORT = 3000;

app.get('/',(req,res)=>{
    res.send("HI");
})

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})