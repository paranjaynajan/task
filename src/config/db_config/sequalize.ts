import { Sequelize } from 'sequelize';
import dotenv from "dotenv"
dotenv.config()
export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: 'localhost',
        port: 3306 ,
        dialect: 'mysql'
    },
);
sequelize.authenticate().then(()=>{console.log("database connected")}).catch(()=>{console.log("database caoont be connected")})
