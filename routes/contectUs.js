const express=require('express')
const path=require('path');
// const page=require('./../views')
const contectUsRoute=express.Router()

contectUsRoute.get('/contectUs',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','contectUs.html'))
})

module.exports=contectUsRoute;