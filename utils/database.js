const {Sequelize}=require('sequelize');
const sequelize= new Sequelize('appointment','root','Satya0*123',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;