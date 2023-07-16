const path = require('path');
const fs = require('fs');
const Appointment = require('../models/appointment');

module.exports.getHomeController = (req, res) => {
    Appointment.findAll()
    //return value will be an object so you have to find out your result using loop
    .then(appointment=>{
            console.log(`appointments are :${appointment.forEach(appoin=>{
                console.log(appoin.name);
            })}`);
            res.sendFile(path.join(__dirname, '/..', '/views', '/index.html'))
        })
        .catch(err=>console.log(err));
};

module.exports.postHomeController = (req, res) => {
    console.log(req.body);
    const appointment={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        date: req.body.date,
        time: req.body.time
      }
      Appointment.create(appointment)
        .then(result=>{
            // console.log(result)
            res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
        })
        .catch(err=>console.log(err));
};