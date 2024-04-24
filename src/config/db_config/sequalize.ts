import { Sequelize } from 'sequelize';
import dotenv from "dotenv"

export const sequelize = new Sequelize('practice','root','Paranjay@123',{
    host:'127.0.0.1', port:3306,dialect:"mysql",
})
sequelize.authenticate().then(()=>{console.log("database connected")}).catch(()=>{console.log("database caoont be connected")})
