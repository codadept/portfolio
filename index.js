require("dotenv").config();

const express = require("express");
const { reset } = require("nodemon");
const app = express();
const path =  require('path');
const PORT = process.env.PORT || 3000;
const gmailPass = process.env.GMAIL_APP_PASSWORD;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/projects",(req,res)=>{
    res.render("projects");
})

app.get("/blogs",(req,res)=>{
    res.render("blogs");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/home",(req,res)=>{
    res.render("home");
})

app.get("/achievements",(req,res)=>{
    res.render("achievements")
})

app.get("/contact",(req,res)=>{
    res.render("contact",{gmailPass})
})

app.get('/',(req,res)=>{
    res.redirect("home");
})

app.get("*",(req,res)=>{
    res.send("The Page doesn't exist. ERROR 404!")
})

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
