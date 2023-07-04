const fs=require('fs')
const express=require('express')
const path=require('path');
// const page=require('./../views')
const homeRoute=express.Router()

homeRoute.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/..','/views','/index.html'))
})
homeRoute.post('/',(req,res)=>{
    console.log(req.body);
    fs.appendFileSync('detail.txt',`${req.body.name} : ${req.body.email}, `)
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})

module.exports=homeRoute;