const express=require('express');
const path=require('path');
const ejs=require('ejs')
const bodyParser=require('body-parser')

const homeRoute=require('./routes/homeRoutes')
const contectUsRoute=require('./routes/contectUs')

const app=express();
 app.use(bodyParser.urlencoded({extended:false}));
// app.use('views engine', 'ejs');
app.use(homeRoute)
app.use(contectUsRoute)

app.listen(3000,()=>console.log('listening on port 3000'));