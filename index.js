const express=require('express');
const app=express();
const port=8000;

const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//redirecting routes
app.use('/', require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("My server is not connected ",err);
    }else{
        console.log("Server is running on the port",port);
    }
});