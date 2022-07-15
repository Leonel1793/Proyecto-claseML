const express=require('express');
const path=require('path');
let app=express();

app.listen(process.env.PORT || 3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});



const publicPath= path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

let home=path.resolve(__dirname,'./views/home.html');
let registro=path.resolve(__dirname, './views/register.html');
let login=path.resolve(__dirname, './views/login.html');
let main=path.resolve(__dirname, './views/main.html');

app.get('/',function(req,res){
    res.sendFile(home);
})

app.get('/registro',function(req,res){
    res.sendFile(registro);
})

app.get('/login',function(req,res){
    res.sendFile(login);
})

app.get('/main',function(req,res){
    res.sendFile(main);
})