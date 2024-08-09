import express, { Application } from 'express';
import sequelize from "./config/database";
import router from "./routes/Router";
import { config } from 'dotenv';
import './config/container'
import errorHandler from './middlewares/errorHandler';

config();

const PORT = process.env.PORT || 3000
const app: Application = express();
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

const startServer = async () => { 
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.error("There was an error connecting to the database", error);
    }
}

startServer();