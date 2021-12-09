import express from 'express';
import {initDatabase} from "./database/dbinit.js";
import {mainRouter} from "./route/mainRouter.js";

const app = express();

app.use(express.json())
app.use("/", mainRouter);

app.listen(3000, async ()=>{
    await initDatabase()});