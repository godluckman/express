import express from 'express';
import {initDatabase} from "./database/dbinit.js";

const app = express();


import {userRouter} from "./route/userRouter.js";

app.use(express.json())
app.use("/user", userRouter);


app.use(function (req, res, next) {

    res.status(404).send("Not Found")
});

app.listen(3000, async ()=>{
    await initDatabase()});