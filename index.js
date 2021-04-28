const express = require("express");
const app = express();
const path =  require('path');
const PORT = 3000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    const num = Math.floor(Math.random()*100)+1;
    res.render('home',{rand:num});
})

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})