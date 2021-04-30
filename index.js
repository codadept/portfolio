const express = require("express");
const app = express();
const path =  require('path');
const PORT = 3000;

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

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/home",(req,res)=>{
    res.render("home");
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