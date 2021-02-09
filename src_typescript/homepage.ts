import dotenv from 'dotenv';
dotenv.config();

import ui from "./UI";
import { Server } from 'http';
import StatisticHandler from './middlewares/statistcHandler';

const PORT = process.env.PORT || 3000;

StatisticHandler.initStatistics()

const httpServer: Server = ui.listen(PORT, () => console.log(process.env.APP_NAME + " UI started on Port: " + PORT + "!"));