import express from "express";
import dotenv from 'dotenv';
import mainRouter from "./src/main_router/mainRouter";
import cors from "cors";
import { initModels } from "./src/config/db_config/initModel";
import { sequelize } from "./src/config/db_config/sequalize";
dotenv.config();
const syncDatabases = () => {
    try {
      initModels(sequelize);
      sequelize.sync();
    } catch (err) {
      console.log("error", err);
    }
  };

const runServer = () => {
  try {
    const app = express();
    const port = process.env.PORT ;
    app.use(cors());
    
    app.use(express.json());

    syncDatabases();

    app.use(mainRouter);
    app.listen(port, () => {
      console.log(`server listening at ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}; 
runServer();

