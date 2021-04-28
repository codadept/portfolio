const express = require("express");
const app = express();
const path =  require('path');
const PORT = 3000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render("home");
})

app.get("*",(req,res)=>{
    res.send("The Page doesn't exist. ERROR 404!")
})

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})