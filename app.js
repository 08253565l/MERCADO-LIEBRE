const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
});
app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
});
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
});
