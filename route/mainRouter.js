import {Router} from "express";
import {userRouter} from "./userRouter.js";
import {listRouter} from "./listRouter.js";


export const mainRouter = Router();

mainRouter.use("/users?", userRouter);
mainRouter.use("/lists?", listRouter);
mainRouter.use(function (req, res, next) {
    res.status(404).send("Not Found")
});