const path = require('path');
const fs = require('fs');
const Appointment = require('../models/appointment');

module.exports.getHomeController = (req, res) => {
    Appointment.findAll()
        .then(appointment=>{
            console.log(appointment);
            res.sendFile(path.join(__dirname, '/..', '/views', '/index.html'))
        })
        .catch(err=>console.log(err));
};

module.exports.postHomeController = (req, res) => {
    console.log(req.body);
    const sample_appointment={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        date: req.body.date,
        time: req.body.time
      }
      Appointment.create(sample_appointment)
        .then(result=>{
            console.log(result)
            res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
        })
        .catch(err=>console.log(err));
};