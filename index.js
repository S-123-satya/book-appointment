const express=require('express');
const path=require('path');
const ejs=require('ejs')
const bodyParser=require('body-parser')

const homeRoute=require('./routes/homeRoutes')
const contactUsRoute=require('./routes/contactUs')
const sequelize = require('./utils/database');
const Appointment = require('./models/appointment');

const app=express();
 app.use(bodyParser.urlencoded({extended:false}));
// app.use('views engine', 'ejs');
app.use(homeRoute)
app.use(contactUsRoute)
// sequelize.sync()
// Appointment.sync({force:true})
// .then(()=>console.log('table created'))
//    .catch( (error) =>{
//     console.error('Unable to connect to the database:', error);
//   });

app.listen(3000,()=>console.log('listening on port 3000'));